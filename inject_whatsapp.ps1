$files = Get-ChildItem -Path "e:\ISBT Kumedi Indore" -Filter "*.html"

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Check if script is already present
    if ($content -notmatch 'whatsappbtn\.js') {
        # Inject script before </body>
        $content = $content -replace '</body>', "`n  <script src=`"whatsappbtn.js`"></script>`n</body>"
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Added whatsappbtn.js to $($file.Name)"
    } else {
        Write-Host "whatsappbtn.js already in $($file.Name)"
    }
}
Write-Host "Done"
