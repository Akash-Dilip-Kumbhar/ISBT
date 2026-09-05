$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # 1. ISBT MASTER PLAN link
    $content = $content -replace 'href="[^"]*"(?<rest>[^>]*>\s*ISBT Master Plan)', 'href="isbtmasterplan.html"${rest}'

    # 3. Multi-Modal Operations link
    $content = $content -replace 'href="[^"]*"(?<rest>[^>]*>\s*Multi-Modal Operations)', 'href="multiModalOperations.html"${rest}'

    # 2. Google Maps link
    $content = $content -replace 'href="[^"]*"(?<rest>[^>]*>[\s\n]*<i[^>]*></i>[\s\n]*VIEW ON GOOGLE MAPS)', 'href="https://maps.app.goo.gl/BVg1Gi1tbBRd87wQ8"${rest}'

    # 4. Smart Fleet Management (remove it)
    $content = $content -replace '(?i)<a[^>]*>\s*Smart Fleet Management\s*</a>', ''

    # 5. HELP / SUPPORT - Contact Us at +91 731 243 0000
    if ($content -match "Contact Us at \+91 731 243 0000" -and $content -notmatch '<a href="https://bvgindia.com/contact-us/"') {
        $content = $content.Replace("Contact Us at +91 731 243 0000", '<a href="https://bvgindia.com/contact-us/" target="_blank" class="text-dark text-decoration-none hover-orange transition-all">Contact Us at +91 731 243 0000</a>')
    }

    # 6. Terms & Conditions and Privacy Policy
    $content = $content -replace '(?i)<div>\s*(?:<a[^>]*>)?Terms\s*&\s*Conditions(?:</a>)?\s*\|\s*(?:<a[^>]*>)?Privacy\s*Policy(?:</a>)?\s*</div>', '<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>'

    $content = $content -replace '(?i)(<div>)\s*(?:<a[^>]*>)?Terms\s*&\s*Conditions(?:</a>)?\s*\|\s*(?:<a[^>]*>)?Privacy\s*Policy(?:</a>)?\s*(</div>)', '$1<a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a>$2'

    $content = $content.Replace("<div>Terms & Conditions | Privacy Policy </div>", '<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>')
    $content = $content.Replace("<div>Terms & Conditions | Privacy Policy</div>", '<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>')
    $content = $content.Replace('<div><a href="termcondition.html" class="text-decoration-none text-muted">Terms & Conditions</a> | <a href="#" class="text-decoration-none text-muted">Privacy Policy</a></div>', '<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>')
    $content = $content.Replace('<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a> | <a href="#" class="text-decoration-none text-muted">Privacy Policy</a></div>', '<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>')

    # 7. "Read Full overview" in index page
    if ($file.Name -eq "index.html") {
        $content = $content -replace 'href="[^"]*"(?<rest>[^>]*>Read Full overview)', 'href="multiModalOperations.html"${rest}'
        $content = $content -replace 'href="[^"]*"(?<rest>[^>]*>READ FULL OVERVIEW)', 'href="multiModalOperations.html"${rest}'
    }

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    Write-Host "Updated $($file.Name)"
}
