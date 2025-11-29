# For local testing, you can pass buildVersion.
# Example usage:
# ./test-example.ps1 -buildVersion 23.1.13
param (
    [string]$buildVersion = $Env:CodeCentralBuildVersion
)

# Masstest-specific parameter. Specifies the minor version (example: '21.1.5')
$global:BUILD_VERSION = $buildVersion

$global:ERROR_CODE = 0
$global:FAILED_PROJECTS = @()

function Test-NpmVersionExists {
    param ([string]$Pkg, [string]$Ver)
    npm view "$Pkg@$Ver" > $null 2>&1
    return ($LASTEXITCODE -eq 0)
}

function Get-ValidNpmVersion {
    param (
        [string]$PackageName,
        [string]$Version
    )

    Write-Host "Checking $PackageName@$Version..."
    if (Test-NpmVersionExists -Pkg $PackageName -Ver $Version) {
        Write-Host "$PackageName@$Version exists."
        return $Version
    }

    try {
        $v = [version]$Version
        $fallback = "$($v.Major).$($v.Minor)-stable"
    } catch {
        Write-Host "Invalid version format: $Version"
        return $null
    }

    Write-Host "$PackageName@$Version not found. Trying fallback: $PackageName@$fallback..."
    if (Test-NpmVersionExists -Pkg $PackageName -Ver $fallback) {
        Write-Host "$PackageName@$fallback exists (fallback)."
        return $fallback
    }

    Write-Host "Neither $PackageName@$Version nor @$fallback exist."
    return $null
}

function Install-Packages {
    param (
        [string]$folderName,
        [string[]]$packages,
        [string]$buildVersion
    )

    Write-Output "`nInstalling packages in folder: $folderName"

    foreach ($package in $packages) {
        $packageVersion = Get-ValidNpmVersion -PackageName $package -Version $buildVersion
        $packageWithVersion = "$package@$packageVersion"
        Write-Output "Installing $packageWithVersion..."

        npm install --save --save-exact --no-fund --loglevel=error --force $packageWithVersion
        if (-not $?) {
            Write-Error "`nERROR: Failed to install $packageWithVersion in $folderName"
            throw "Installation failed for $packageWithVersion in $folderName"
        }
    }

    Write-Output "`nAll packages installed successfully in $folderName"
}

function Build-Project {
    param (
        [string]$folderName
    )
    Write-Output "`nBuilding the project in folder: $folderName"

    npm run build
    if (-not $?) {
        Write-Error "`nERROR: Failed to build the project in $folderName"
        throw "Build failed in $folderName"
    }
}

function Process-JavaScriptProjects {
    param (
        [string]$buildVersion
    )
    Write-Output "`n--== Starting JavaScript Projects Processing ==--"

    [hashtable[]]$folders = @(
        @{ Name = "Angular"; Packages = @("devextreme", "devextreme-angular") },
        @{ Name = "React"; Packages = @("devextreme", "devextreme-react") },
        @{ Name = "Vue"; Packages = @("devextreme", "devextreme-vue") }
    )

    $jQueryEntry = @{
        Name = "jQuery";
        Packages = if ([version]$buildVersion -ge [version]23.1) {
            @("devextreme", "devextreme-dist")
        } else {
            @("devextreme")
        }
    }

    $folders = @($jQueryEntry) + $folders

    foreach ($folder in $folders) {
        $folderName = $folder.Name
        $packages = $folder.Packages

        if (-not (Test-Path $folderName)) {
            Write-Output "`nDirectory $folderName does not exist. Skipping..."
            continue
        }

        Write-Output "`nProcessing folder: $folderName"
        Push-Location $folderName

        try {
            Write-Output "`nRemoving node_modules & package-lock.json: $pwd"
            Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
            Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
            Install-Packages -folderName $folderName -packages $packages -buildVersion $buildVersion
            Write-Output "`nInstalling remaining packages in $folderName"
            npm install --save --save-exact --no-fund --loglevel=error
            if (-not $?) {
                throw "ERROR: Failed to install remaining packages in $folderName"
            }
            Build-Project -folderName $folderName
        } catch {
            Write-Error "`nAn error occurred: $_"
            $global:LASTEXITCODE = 1
            $global:ERROR_CODE = 1
            $global:FAILED_PROJECTS += $folderName
        } finally {
            Pop-Location
        }
    }

    Write-Output "`n--== JavaScript Projects Processing Completed ==--"
}

function Resolve-NuGetVersionWithFallback {
    param (
        [string]$PackageName,
        [string]$RequestedVersion
    )

    function Test-PackageAvailable {
        param ([string]$name, [string]$ver)
        dotnet add package $name --version $ver > $null 2>&1
        return ($LASTEXITCODE -eq 0)
    }

    if (Test-PackageAvailable -name $PackageName -ver $RequestedVersion) {
        Write-Host "$PackageName@$RequestedVersion is available."
        return $RequestedVersion
    }

    Write-Host "$PackageName@$RequestedVersion not found. Checking for -beta and -alpha versions..."

    $suffixes = @("beta", "alpha")
    foreach ($suffix in $suffixes) {
        $fallbackVersion = "$RequestedVersion-$suffix"
        if (Test-PackageAvailable -name $PackageName -ver $fallbackVersion) {
            Write-Host "Found $PackageName@$fallbackVersion"
            return $fallbackVersion
        }
    }

    Write-Warning "No matching versions found for $PackageName@$RequestedVersion"
    return $null
}

function Process-AspNetCoreProject {
    param (
        [Parameter(Mandatory = $true)]
        [string]$buildVersion
    )

    $folderPath = Get-ChildItem -Directory |
        Where-Object { $_.Name -match '(?i)^ASP\.NET\s*Core$' } |
        Select-Object -First 1 -ExpandProperty FullName

    if (-not $folderPath) {
        Write-Error "Directory matching 'ASP.NET Core' not found."
        return
    }

    Write-Host "Found project directory: $folderPath"
    Push-Location $folderPath

    try {
        $resolvedNugetVersion = Resolve-NuGetVersionWithFallback -PackageName "DevExtreme.AspNet.Core" -RequestedVersion $buildVersion
        if (-not $resolvedNugetVersion) {
            throw "No valid version found for DevExtreme.AspNet.Core"
        }

        Write-Host "Installing DevExtreme.AspNet.Core@$resolvedNugetVersion..."
        dotnet add package DevExtreme.AspNet.Core --version $resolvedNugetVersion

        $packageJsonPath = Get-ChildItem -Path $folderPath -Filter "package.json" -Recurse -File -ErrorAction SilentlyContinue |
            Select-Object -First 1 -ExpandProperty FullName

        if ($packageJsonPath) {
            Write-Host "Found package.json: $packageJsonPath"

            try {
                $packageJson = Get-Content -Path $packageJsonPath -Raw | ConvertFrom-Json
                $updated = $false

                if ($packageJson.dependencies.devextreme) {
                    $validDevextremeVersion = Get-ValidNpmVersion -PackageName "devextreme" -Version $buildVersion
                    if ($validDevextremeVersion) {
                        $packageJson.dependencies.devextreme = $validDevextremeVersion
                        $updated = $true
                    }
                }

                if ($packageJson.dependencies.'devextreme-dist') {
                    $validDevextremeDistVersion = Get-ValidNpmVersion -PackageName "devextreme-dist" -Version $buildVersion
                    if ($validDevextremeDistVersion) {
                        $packageJson.dependencies.'devextreme-dist' = $validDevextremeDistVersion
                        $updated = $true
                    }
                }

                if ($updated) {
                    $tempJsonPath = [System.IO.Path]::GetTempFileName()
                    $jsonContent = $packageJson | ConvertTo-Json -Depth 10
                    [System.IO.File]::WriteAllText($tempJsonPath, $jsonContent, [System.Text.UTF8Encoding]::new($false))
                    node -e "const fs = require('fs'); const data = fs.readFileSync('$($tempJsonPath -replace '\\', '/')', 'utf8'); fs.writeFileSync('$($packageJsonPath -replace '\\', '/')', data, 'utf8');"
                    Remove-Item $tempJsonPath -ErrorAction SilentlyContinue
                    Write-Host "Updated package.json with valid versions."
                } else {
                    Write-Host "No matching dependencies found in package.json to update."
                }

                Write-Host "Installing NPM dependencies..."
                npm install --save --save-exact --no-fund --loglevel=error
                if (-not $?) {
                    throw "Failed to install npm dependencies"
                }
            } catch {
                Write-Error "Failed to update package.json: $_"
            }
        } else {
            Write-Warning "No package.json file found in '$folderPath'."
        }

        Write-Host "Running dotnet build..."
        dotnet build
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Build succeeded."
        } else {
            throw
        }
    } catch {
        Write-Error "An error occurred: $_"
        $global:LASTEXITCODE = 1
        $global:ERROR_CODE = 1
        $global:FAILED_PROJECTS += "ASP.NET Core"
    } finally {
        Pop-Location
    }
}

function Write-BuildInfo {
    $BUILD_VERSION = if ($global:BUILD_VERSION -ne $null -and $global:BUILD_VERSION -ne "") {
        $global:BUILD_VERSION
    } else {
        "(empty)"
    }

    Write-Output "Build Version: $BUILD_VERSION"
}

Write-BuildInfo
Process-JavaScriptProjects -buildVersion $global:BUILD_VERSION
Process-AspNetCoreProject -buildVersion $global:BUILD_VERSION

Write-Output "`nFinished testing version: $global:BUILD_VERSION. Error code: $global:ERROR_CODE"
if ($global:ERROR_CODE -ne 0 -and $global:FAILED_PROJECTS.Count -gt 0) {
    Write-Output "`FAILED PROJECTS: $(($global:FAILED_PROJECTS -join ", "))"
}

exit $global:ERROR_CODE
