$content = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\shopOffice.html')

# 1. Update font sizes in the JS card rendering
# Replace font-size-xs with font-size-sm
# But wait, first we should replace font-size-sm with font-size-lg, so we don't accidentally promote xs to lg
$content = $content.Replace('font-size-sm', 'font-size-lg')
$content = $content.Replace('font-size-xs', 'font-size-sm')

# 2. Update font sizes in the header
# We want to change 'display-5 font-playfair' to 'fs-2 font-playfair'
$content = $content.Replace('display-5 font-playfair', 'fs-2 font-playfair')
$content = $content.Replace('font-size-2xl mb-0 opacity-100', 'font-size-xl mb-0 opacity-100')

# 3. Update footer
# The current footer in shopOffice.html starts at line 271 to 358.
# I will use regex to extract and replace the entire <footer ...> ... </footer>
$footerContent = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\termcondition.html')
$footerMatch = [System.Text.RegularExpressions.Regex]::Match($footerContent, '(?s)<footer.*?</footer>')
if ($footerMatch.Success) {
    $newFooter = $footerMatch.Value
    # Also fix the copyright symbol encoding just in case
    $newFooter = $newFooter.Replace("Â©", "&copy;")
    
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?si)<footer.*?</footer>', $newFooter)
}

[System.IO.File]::WriteAllText('e:\ISBT Kumedi Indore\shopOffice.html', $content, [System.Text.Encoding]::UTF8)
Write-Host "Updated shopOffice.html"
