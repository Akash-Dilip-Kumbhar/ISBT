# Rename files if they exist
if (Test-Path "e:\ISBT Kumedi Indore\viewauction.html") {
    Rename-Item "e:\ISBT Kumedi Indore\viewauction.html" -NewName "viewproposal.html"
}
if (Test-Path "e:\ISBT Kumedi Indore\auction.json") {
    Rename-Item "e:\ISBT Kumedi Indore\auction.json" -NewName "proposal.json"
}

# Replace in all HTML and JS files
$files = Get-ChildItem -Path "e:\ISBT Kumedi Indore" -Include *.html, *.js -Recurse
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Exact case replacements in cascading order
    $content = $content -creplace "AUCTIONS", "PROPOSALS"
    $content = $content -creplace "AUCTION", "PROPOSAL"
    $content = $content -creplace "Auctions", "Proposals"
    $content = $content -creplace "Auction", "Proposal"
    $content = $content -creplace "auctions", "proposals"
    $content = $content -creplace "auction", "proposal"
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
Write-Host "Replaced all occurrences and renamed files."
