# For local testing, you can pass branchName and/or buildVersion.
# If both parameters are specified, only buildVersion will be used.
# Example usage:
# ./test-example.ps1 -branchName 23.1.3+
# ./test-example.ps1 -buildVersion 23.1.13
param (
    [string]$branchName = [Environment]::GetEnvironmentVariable("BRANCH_NAME", [EnvironmentVariableTarget]::Machine),
    [string]$buildVersion = [Environment]::GetEnvironmentVariable("BUILD_VERSION", [EnvironmentVariableTarget]::Machine)
)

# Repository's branch name, e.g. 24.1.3+
$global:BRANCH_NAME = $branchName
# Masstest-specific parameter. Specifies the minor version (example: '21.1.5') !or daily build (example: '21.2.2005')
$global:BUILD_VERSION = $buildVersion

$global:ERROR_CODE = 0
$global:FAILED_PROJECTS = @()

$global:ALL_VERSIONS = @(
    "14.1", "14.2",
    "15.1", "15.2",
    "16.1", "16.2",
    "17.1", "17.2",
    "18.1", "18.2",
    "19.1", "19.2",
    "20.1", "20.2",
    "21.1", "21.2",
    "22.1", "22.2",
    "23.1", "23.2",
    "24.1", "24.2",
    "25.1", "25.2" 
)

function Install-Packages {
    param (
        [string]$folderName,
        [string[]]$packages,
        [string]$buildVersion
    )
    Write-Output "`nInstalling packages in folder: $folderName"
    
    $packageList = $packages | ForEach-Object { "$_@$buildVersion" }
    Write-Output "`nPackages to install: $($packageList -join ", ")"
    # TODO: Uninstall DevExtreme packages to avoid potential peer-dependency issues
    npm install @($packageList) --save --save-exact --no-fund
    if (-not $?) {
        Write-Error "`nERROR: Failed to install DevExtreme packages in $folderName"
        throw "Installation failed in $folderName"
    }
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

function Set-BuildVersion {
    Write-Output "`n--== Starting Set-BuildVersion process. ==--"

    $BUILD_VERSION = $global:BUILD_VERSION
    if ($BUILD_VERSION) {
        Write-Output "BUILD_VERSION is already set: $BUILD_VERSION"
        return
    }

    $BUILD_VERSIONS_LIST = "BUILD_VERSIONS_LIST"

    $inputMajorMinor = $global:BRANCH_NAME -replace "\.\d+\+$", ""
    Write-Output "Extracted major.minor version from branch name: $inputMajorMinor"

    $filteredList = $global:ALL_VERSIONS | Where-Object {
        ($_ -replace "\." -as [double]) -ge ($inputMajorMinor -replace "\." -as [double])
    }
    Write-Output "Filtered versions list: $filteredList"

    $currentValue = [Environment]::GetEnvironmentVariable($BUILD_VERSIONS_LIST, [EnvironmentVariableTarget]::Machine)
    $currentList = if ($currentValue) {
        $currentValue -split ";"
    } else {
        $filteredList
    }
    Write-Output "Current versions list: $currentList"

    if ($currentList.Count -gt 1) {
        $inputMajorMinor = $currentList[0]
        $updatedList = $currentList[1..($currentList.Count - 1)]
    } else {
        Write-Output "The list in the environment variable has only one item."
        $inputMajorMinor = $currentList[0]
        $updatedList = @()
    }

    $global:BUILD_VERSION = $inputMajorMinor
    Write-Output "BUILD_VERSION set to: $global:BUILD_VERSION"

    $newValue = $updatedList -join ";"
    [Environment]::SetEnvironmentVariable($BUILD_VERSIONS_LIST, $newValue, [EnvironmentVariableTarget]::Machine)

    Write-Output "Environment variable '$BUILD_VERSIONS_LIST' updated."
    Write-Output "New list: $updatedList"
}

function Write-BuildInfo {
    $BRANCH_NAME = if ($global:BRANCH_NAME -ne $null -and $global:BRANCH_NAME -ne "") { 
        $global:BRANCH_NAME 
    } else { 
        "(empty)" 
    }

    $BUILD_VERSION = if ($global:BUILD_VERSION -ne $null -and $global:BUILD_VERSION -ne "") { 
        $global:BUILD_VERSION 
    } else { 
        "(empty)" 
    }

    Write-Output "`nBranch Name: $BRANCH_NAME"
    Write-Output "Build Version: $BUILD_VERSION"
}

Write-BuildInfo
Set-BuildVersion
Process-JavaScriptProjects -buildVersion $global:BUILD_VERSION
Process-DotNetProjects

Write-Output "`nFinished testing version: $global:BUILD_VERSION. Error code: $global:ERROR_CODE"
if ($global:ERROR_CODE -ne 0 -and $global:FAILED_PROJECTS.Count -gt 0) {
    Write-Output "`FAILED PROJECTS: $(($global:FAILED_PROJECTS -join ", "))"
}

exit $global:ERROR_CODE
