$files = Get-ChildItem -Path "e:\ISBT Kumedi Indore" -Filter "*.html"
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Remove existing <footer>
    $content = [regex]::Replace($content, '(?si)(?:<!--\s*Footer\s*-->\s*)?<footer\b[^>]*>.*?</footer>\s*', '')
    
    # Check if footer.js is already included
    if ($content -notmatch 'footer\.js') {
        # Inject script right before <script src="whatsappbtn.js"></script> if present, or before </body>
        if ($content -match '<script src="whatsappbtn\.js"></script>') {
            $content = $content -replace '<script src="whatsappbtn\.js"></script>', "<script src=`"footer.js`"></script>`n  <script src=`"whatsappbtn.js`"></script>"
        } else {
            $content = $content -replace '</body>', "`n  <script src=`"footer.js`"></script>`n</body>"
        }
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Updated $($file.Name)"
}
Write-Host "Done injecting footer.js"
