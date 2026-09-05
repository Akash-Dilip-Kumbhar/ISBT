$indexContent = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\index.html')
$footerMatch = [System.Text.RegularExpressions.Regex]::Match($indexContent, '(?s)<!-- Footer -->.*?</\s*footer\s*>')
if ($footerMatch.Success) {
    $footer = $footerMatch.Value
    $files = Get-ChildItem -Filter *.html
    foreach ($file in $files) {
        $content = [System.IO.File]::ReadAllText($file.FullName)
        if (-not [System.Text.RegularExpressions.Regex]::IsMatch($content, '(?i)</\s*footer\s*>')) {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?i)</\s*body\s*>', "`n    $footer`n  </body>")
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
            Write-Host "Added footer to $($file.Name)"
        }
    }
}
