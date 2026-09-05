$content = [System.IO.File]::ReadAllText('e:\ISBT Kumedi Indore\viewauction.html', [System.Text.Encoding]::UTF8)

# Replace 'Auctions' with 'Proposals' first to avoid double replacing 's'
$content = $content.Replace('AUCTIONS', 'PROPOSALS')
$content = $content.Replace('Auctions', 'Proposals')
$content = $content.Replace('auctions', 'proposals')

# Replace 'Auction' with 'Proposal'
$content = $content.Replace('AUCTION', 'PROPOSAL')
$content = $content.Replace('Auction', 'Proposal')

# But we must restore the JSON fetch URL and JS function names that rely on lowercase 'auction' if they got mangled.
# Wait, I did replace 'auctions' -> 'proposals'. Let's restore the JS stuff manually just to be safe.
$content = $content.Replace('renderproposals', 'renderAuctions')
$content = $content.Replace('proposal.json', 'auction.json')
$content = $content.Replace('window.proposalData', 'window.auctionData')
$content = $content.Replace('currentModalproposal', 'currentModalAuction')

[System.IO.File]::WriteAllText('e:\ISBT Kumedi Indore\viewauction.html', $content, [System.Text.Encoding]::UTF8)
Write-Host "Updated viewauction.html"
