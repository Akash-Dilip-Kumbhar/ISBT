$content = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\index.html', [System.Text.Encoding]::UTF8)

# Replace the mangled bullet character with the HTML entity for bullet
$content = $content.Replace('â€¢', '&bull;')

[System.IO.File]::WriteAllText('e:\ISBT Kumedi Indore\index.html', $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed bullets in index.html"
