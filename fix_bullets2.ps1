$path = 'e:\ISBT Kumedi Indore\index.html'
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

$badString = [string]::Join('', ([char]0x00E2, [char]0x20AC, [char]0x00A2))
$content = $content.Replace($badString, '&bull;')

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed bullets in index.html securely"
