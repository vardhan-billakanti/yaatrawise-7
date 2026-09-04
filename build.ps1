# Merge script to ensure index.html can be double-clicked in Windows Explorer (file:// protocol)
$appPath = Join-Path $PSScriptRoot "js\app.jsx"
$indexPath = Join-Path $PSScriptRoot "index.html"

$appContent = [System.IO.File]::ReadAllText($appPath, [System.Text.Encoding]::UTF8)
$indexContent = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

$startTag = '<script type="text/babel">'
$endTag = '</script>'

if ($indexContent.Contains($startTag) -and $indexContent.Contains($endTag)) {
    $startIndex = $indexContent.IndexOf($startTag)
    $afterStart = $startIndex + $startTag.Length
    $endIndex = $indexContent.IndexOf($endTag, $afterStart)
    
    $prefix = $indexContent.Substring(0, $afterStart)
    $suffix = $indexContent.Substring($endIndex)
    
    $newIndex = $prefix + "`r`n" + $appContent + "`r`n" + $suffix
    [System.IO.File]::WriteAllText($indexPath, $newIndex, [System.Text.Encoding]::UTF8)
    Write-Host "SUCCESS: Inlined updated app.jsx into index.html."
} elseif ($indexContent.Contains('<script type="text/babel" src="js/app.jsx"></script>')) {
    $inlineScript = "<script type=""text/babel"">`r`n" + $appContent + "`r`n</script>"
    $newIndex = $indexContent.Replace('<script type="text/babel" src="js/app.jsx"></script>', $inlineScript)
    [System.IO.File]::WriteAllText($indexPath, $newIndex, [System.Text.Encoding]::UTF8)
    Write-Host "SUCCESS: app.jsx inlined into index.html."
} else {
    Write-Host "ERROR: Could not locate script tag in index.html."
}
