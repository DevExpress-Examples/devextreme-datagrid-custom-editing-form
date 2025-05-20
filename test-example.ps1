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

function Install-Packages {
    param (
        [string]$folderName,
        [string[]]$packages,
        [string]$buildVersion
    )

    Write-Output "`nInstalling packages in folder: $folderName"

    # Loop through each package and install it individually
    foreach ($package in $packages) {
        $packageWithVersion = "$package@$buildVersion"
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
        Packages = if ([version]$buildVersion -ge [version]23.1) { # `devextreme-dist` appeared in 23.1
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

function Process-DotNetProjects {
    param (
        [string]$RootDirectory = "."
    )

    Write-Output "`n--== Starting .NET project processing in directory: $RootDirectory ==--"

    $slnFiles = Get-ChildItem -Path $RootDirectory -Filter *.sln -Recurse -Depth 1

    if ($slnFiles.Count -eq 0) {
        Write-Output "`nNo solution files (.sln) found in the specified directory at level 1."
        return
    }

    foreach ($slnFile in $slnFiles) {
        Write-Output "`nFound solution file: $($slnFile.FullName)"
        
        try {
            Write-Output "`nBuilding solution: $($slnFile.FullName)"
            dotnet build $slnFile.FullName -c Release

            if ($?) {
                Write-Output "`nBuild succeeded for $($slnFile.FullName)."
            } else {
                throw "Build failed for $($slnFile.FullName)."
            }
        } catch {
            Write-Error "`nERROR: $_"
            $global:LASTEXITCODE = 1
            $global:ERROR_CODE = 1
            $global:FAILED_PROJECTS += "ASP.NET"
        }
    }

    Write-Output "`nCompleted .NET project processing."
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
Process-DotNetProjects

Write-Output "`nFinished testing version: $global:BUILD_VERSION. Error code: $global:ERROR_CODE"
if ($global:ERROR_CODE -ne 0 -and $global:FAILED_PROJECTS.Count -gt 0) {
    Write-Output "`FAILED PROJECTS: $(($global:FAILED_PROJECTS -join ", "))"
}

exit $global:ERROR_CODE
