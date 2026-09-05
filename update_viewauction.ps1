$content = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\viewauction.html')

# 1. Update font sizes
$content = $content.Replace('display-5 font-playfair', 'fs-2 font-playfair')
$content = $content.Replace('display-6', 'fs-3')
$content = $content.Replace('font-size-2xl max-w-800', 'font-size-xl max-w-800')
$content = $content.Replace('fs-3 d-flex align-items-baseline gap-1', 'fs-4 d-flex align-items-baseline gap-1')
$content = $content.Replace('font-size-xs', 'font-size-sm')

# 2. Fix Indian Rupee encoding/size
# It appears as â‚¹ due to previous ANSI read/write by PowerShell
$content = $content.Replace('â‚¹', '&#8377;')

# 3. Update footer
$footerContent = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\termcondition.html')
$footerMatch = [System.Text.RegularExpressions.Regex]::Match($footerContent, '(?s)<footer.*?</footer>')
if ($footerMatch.Success) {
    $newFooter = $footerMatch.Value.Replace("Â©", "&copy;")
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?si)<footer.*?</footer>', $newFooter)
}

[System.IO.File]::WriteAllText('e:\ISBT Kumedi Indore\viewauction.html', $content, [System.Text.Encoding]::UTF8)
Write-Host "Updated viewauction.html"
