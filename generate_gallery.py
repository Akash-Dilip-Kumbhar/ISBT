import sys

header = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gallery - ISBT Kumedi Indore</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <style>
      .masonry-gallery {
        column-count: 4;
        column-gap: 1.5rem;
      }
      .masonry-item {
        display: inline-block;
        width: 100%;
        margin-bottom: 1.5rem;
        break-inside: avoid;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .masonry-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
      }
      .masonry-item img {
        width: 100%;
        height: auto;
        display: block;
      }
      @media (max-width: 1200px) {
        .masonry-gallery { column-count: 3; }
      }
      @media (max-width: 768px) {
        .masonry-gallery { column-count: 2; }
      }
      @media (max-width: 576px) {
        .masonry-gallery { column-count: 1; }
      }
    </style>
  </head>
  <body class="bg-light">
    <!-- Top Bulletin Bar -->
    <div class="bg-dark-accent text-white py-2 px-3 px-lg-3 d-flex justify-content-between align-items-center font-size-xl">
      <div class="d-flex align-items-center gap-3">
        <span class="badge bg-orange text-uppercase rounded-0 px-2 py-1 d-flex align-items-center gap-2 letter-spacing-md">
          <span class="rounded-circle bg-white d-inline-block size-5"></span> BULLETIN / GAZETTE
        </span>
        <span class="text-light d-none d-md-inline opacity-85">ISBT-STMB-IDR-EOI-2026/108 for Commercial, Retail, Restaurants (F&B) is now LIVE</span>
      </div>
      <div class="d-flex align-items-center gap-4">
        <a href="#" class="text-orange text-decoration-none fw-bold text-uppercase d-flex align-items-center gap-1 letter-spacing-md">
          READ DISPATCH <i class="bi bi-chevron-right font-size-base icon-stroke-1"></i>
        </a>
        <button class="btn btn-link text-white p-0 border-0 text-decoration-none">
          <i class="bi bi-x-lg font-size-lg"></i>
        </button>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg py-3 bg-warm-light border-bottom-soft">
      <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand d-flex align-items-center gap-3" href="#">
          <div class="bg-dark-accent text-white rounded-0 d-flex align-items-center justify-content-center size-60 font-weight-800 font-playfair px-2">ISBT</div>
          <div>
            <div class="text-muted mt-1 font-size-sm font-weight-800 text-uppercase letter-spacing-lg">SHREE TANTYA MAMA BHIL</div>
            <div class="fw-bold text-dark font-playfair font-size-7xl line-height-xs">ISBT KUMEDI INDORE</div>
          </div>
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav gap-3 gap-xl-4 text-uppercase fw-bold align-items-center font-size-lg letter-spacing-md">
            <li class="nav-item"><a class="nav-link text-muted d-flex gap-2 position-relative pb-1" href="index.html"><span class="text-muted opacity-40 fw-normal font-size-base mt-1">01</span>HOME</a></li>
            <li class="nav-item"><a class="nav-link text-muted d-flex gap-2 pb-1 text-center line-height-sm" href="aboutus.html"><span class="opacity-40 fw-normal font-size-base mt-1">02</span>ABOUT</a></li>
            <li class="nav-item"><a class="nav-link text-muted d-flex gap-2 pb-1 text-center line-height-sm" href="facilities.html"><span class="opacity-40 fw-normal font-size-base mt-1">03</span>FACILITIES</a></li>
            <li class="nav-item"><a class="nav-link text-muted d-flex gap-2 pb-1 text-center line-height-sm" href="shopOffice.html"><span class="opacity-40 fw-normal font-size-base mt-1">04</span><span class="text-start">SHOPS & OFFICES</span></a></li>
            <li class="nav-item"><a class="nav-link text-dark active d-flex gap-2 pb-1 text-center line-height-sm border-bottom-orange" href="Gallery.html"><span class="opacity-40 fw-normal font-size-base mt-1">05</span>GALLERY</a></li>
          </ul>
        </div>
        <div class="d-flex d-lg-flex gap-3 align-items-center">
          <a href="viewauction.html" class="btn bg-dark-accent text-white fw-bold rounded-0 px-2 py-2 d-flex align-items-center gap-3 text-uppercase font-size-lg letter-spacing-md">
            <i class="bi bi-hammer"></i><span class="text-start line-height-sm">VIEW AUCTIONS</span>
            <span class="badge bg-orange rounded-0 px-2 py-1 text-white font-size-xs line-height-md">LIVE</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- Page Header -->
    <section class="py-5 bg-warm-lighter border-bottom-soft">
      <div class="container py-4 text-center">
        <div class="text-uppercase fw-bold text-orange mb-2 font-size-lg letter-spacing-md">VISUAL TOUR</div>
        <h1 class="display-5 font-playfair fw-bold text-dark">Project Gallery</h1>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-5 bg-white">
      <div class="container py-4">
        <div class="masonry-gallery">
"""

footer = """        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-top pt-5 pb-4 bg-warm-lightest">
      <div class="container">
        <div class="row align-items-center mb-4">
          <div class="col-md-4 mb-4 mb-md-0">
            <a class="text-decoration-none text-dark d-flex align-items-center gap-2 mb-3" href="#">
              <div class="bg-dark text-white p-2 rounded d-flex align-items-center justify-content-center size-32 font-weight-800 font-size-2xl">ISBT</div>
              <div class="fw-bold fs-6 line-height-xs">ISBT Kumedi Indore</div>
            </a>
            <p class="text-muted mb-0 pe-md-4 font-size-xl line-height-lg">The Inter State Bus Terminal at Kumedi is a flagship civic infrastructure project developed and managed by the Indore Development Authority.</p>
            <a href="#" class="d-inline-flex align-items-center gap-2 mt-3 fw-bold text-orange text-decoration-none text-uppercase font-size-lg letter-spacing-sm"><i class="bi bi-geo-alt"></i> VIEW ON GOOGLE MAPS</a>
          </div>
          <div class="col-md-8">
            <div class="d-flex flex-wrap gap-4 justify-content-md-end text-uppercase fw-semibold font-size-md letter-spacing-sm">
              <a href="#" class="text-dark text-decoration-none">ISBT Master Plan</a>
              <a href="#" class="text-dark text-decoration-none">IDA Commercial Spaces</a>
              <a href="#" class="text-dark text-decoration-none">Multi-Modal Operations</a>
              <a href="#" class="text-dark text-decoration-none">Smart Fleet Management</a>
              <a href="#" class="text-dark text-decoration-none">Help / Support</a>
              <a href="#" class="text-dark text-decoration-none">Bus Operators <i class="bi bi-box-arrow-up-right ms-1"></i></a>
            </div>
          </div>
        </div>
        <hr class="text-muted opacity-40 my-4" />
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
          <div class="mb-3 mb-md-0">
            <div class="text-uppercase fw-bold text-muted mb-1 font-size-base letter-spacing-md">EXECUTIVE AUTHORITY</div>
            <div class="text-dark fw-semibold font-size-xl">MR-10 Super Corridor Hub, Indore (M.P.) 452010</div>
          </div>
          <div class="mb-3 mb-md-0 text-md-center">
            <div class="text-uppercase fw-bold text-muted mb-1 font-size-base letter-spacing-md">PROJECT OWNER</div>
            <div class="text-dark fw-semibold font-size-xl">Indore Development Authority</div>
          </div>
          <div class="text-md-end">
            <div class="text-uppercase fw-bold text-muted mb-1 font-size-base letter-spacing-md">CONTACT HUB</div>
            <div class="text-dark fw-semibold font-size-xl">Contact Us at +91 731 243 0000</div>
          </div>
        </div>
        <div class="mt-4 pt-3 border-top d-flex flex-column flex-md-row justify-content-between text-muted font-size-lg">
          <div class="mb-2 mb-md-0">© 2026 Indore Development Authority. All Rights Reserved.</div>
          <div>Terms & Conditions | Privacy Policy | Refund Policy</div>
        </div>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
    <script>
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Image %1 of %2'
      });
    </script>
  </body>
</html>
"""

images = ''
for i in range(1, 65):
    images += f'          <a href="img/gallery/img{i}.jpeg" data-lightbox="isbt-gallery" data-title="ISBT Kumedi Gallery Image {i}" class="masonry-item">\n'
    images += f'            <img src="img/gallery/img{i}.jpeg" loading="lazy" alt="Gallery Image {i}" />\n'
    images += f'          </a>\n'

with open('Gallery.html', 'w', encoding='utf-8') as f:
    f.write(header + images + footer)
