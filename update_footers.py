import os
import re

dir_path = "e:/ISBT Kumedi Indore"

for filename in os.listdir(dir_path):
    if not filename.endswith(".html"):
        continue
        
    filepath = os.path.join(dir_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. ISBT MASTER PLAN link
    content = re.sub(r'href="[^"]*"([^>]*>\s*ISBT Master Plan)', r'href="isbtmasterplan.html"\1', content, flags=re.IGNORECASE)

    # 3. Multi-Modal Operations link
    content = re.sub(r'href="[^"]*"([^>]*>\s*Multi-Modal Operations)', r'href="multiModalOperations.html"\1', content, flags=re.IGNORECASE)

    # 2. Google Maps link
    content = re.sub(r'href="[^"]*"([^>]*>[\s\n]*<i[^>]*></i>[\s\n]*VIEW ON GOOGLE MAPS)', r'href="https://maps.app.goo.gl/BVg1Gi1tbBRd87wQ8"\1', content, flags=re.IGNORECASE)

    # 4. Smart Fleet Management
    content = re.sub(r'<a[^>]*>\s*Smart Fleet Management\s*</a>', '', content, flags=re.IGNORECASE)

    # 5. HELP / SUPPORT - Contact Us at +91 731 243 0000
    if "Contact Us at +91 731 243 0000" in content:
        if '<a href="https://bvgindia.com/contact-us/"' not in content:
            content = content.replace("Contact Us at +91 731 243 0000", '<a href="https://bvgindia.com/contact-us/" target="_blank" class="text-dark text-decoration-none hover-orange transition-all">Contact Us at +91 731 243 0000</a>')

    # 6. Terms & Conditions and Privacy Policy
    content = re.sub(r'<div>\s*(?:<a[^>]*>)?Terms\s*&\s*Conditions(?:</a>)?\s*\|\s*(?:<a[^>]*>)?Privacy\s*Policy(?:</a>)?\s*</div>',
                     r'<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>',
                     content, flags=re.IGNORECASE)
                     
    content = re.sub(r'(<div>)\s*(<a[^>]*>)?Terms\s*&\s*Conditions(</a>)?\s*\|\s*(<a[^>]*>)?Privacy\s*Policy(</a>)?\s*(</div>)',
                     r'\1<a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a>\6',
                     content, flags=re.IGNORECASE)

    # Sometimes it's just plain text inside <div>
    content = re.sub(r'<div>Terms & Conditions \| Privacy Policy\s*</div>',
                     r'<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>',
                     content, flags=re.IGNORECASE)
                     
    content = re.sub(r'<div><a href="termcondition\.html" class="text-decoration-none text-muted">Terms & Conditions</a> \| <a href="#" class="text-decoration-none text-muted">Privacy Policy</a></div>',
                     r'<div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>',
                     content, flags=re.IGNORECASE)


    # 7. "Read Full overview" in index page
    if filename == "index.html":
        content = re.sub(r'href="[^"]*"([^>]*>Read Full overview)', r'href="multiModalOperations.html"\1', content, flags=re.IGNORECASE)
        # Handle uppercase/lowercase if any
        content = re.sub(r'href="[^"]*"([^>]*>READ FULL OVERVIEW)', r'href="multiModalOperations.html"\1', content, flags=re.IGNORECASE)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")
