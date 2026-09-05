document.addEventListener("DOMContentLoaded", function () {
  const footerHtml = `
    <!-- Footer -->
    <footer class="bg-white border-top pt-5 pb-4 bg-warm-lightest mt-auto">
      <div class="container">
        <div class="row align-items-center mb-4">
          <div class="col-md-4 mb-4 mb-md-0">
            <a class="text-decoration-none text-dark d-flex align-items-center gap-2 mb-3" href="index.html">
              <div class="bg-dark text-white p-2 rounded d-flex align-items-center justify-content-center size-32 font-weight-800 font-size-2xl">
                ISBT
              </div>
              <div class="fw-bold fs-6 line-height-xs">ISBT Kumedi Indore</div>
            </a>
            <p class="text-muted mb-0 pe-md-4 font-size-xl line-height-lg">
              The Inter State Bus Terminal at Kumedi is a flagship civic
              infrastructure project developed and managed by the Indore
              Development Authority.
            </p>
            <a href="https://maps.app.goo.gl/BVg1Gi1tbBRd87wQ8" target="_blank" class="d-inline-flex align-items-center gap-2 mt-3 fw-bold text-orange text-decoration-none text-uppercase font-size-lg letter-spacing-sm">
              <i class="bi bi-geo-alt"></i> VIEW ON GOOGLE MAPS
            </a>
          </div>
          <div class="col-md-8">
            <div class="d-flex flex-wrap gap-4 justify-content-md-end text-uppercase fw-semibold font-size-md letter-spacing-sm">
              <a href="isbtmasterplan.html" class="text-dark text-decoration-none">ISBT Master Plan</a>
              <a href="#" data-bs-toggle="modal" data-bs-target="#footerRatecardModal" class="text-dark text-decoration-none" style="cursor: pointer;">IDA Commercial Spaces</a>
              <a href="multiModalOperations.html" class="text-dark text-decoration-none">Multi-Modal Operations</a>
            </div>
          </div>
        </div>
        <hr class="text-muted opacity-40 my-4" />
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
          <div class="mb-3 mb-md-0">
            <div class="text-uppercase fw-bold text-muted mb-1 font-size-base letter-spacing-md">
             Concessionaire
            </div>
            <div class="text-dark fw-semibold font-size-xl">
              BVG India Limited 
            </div>
          </div>
          
          <div class="text-md-end">
            <div class="text-uppercase fw-bold text-muted mb-1 font-size-base letter-spacing-md">
              CONTACT HUB
            </div>
            <div class="text-dark fw-semibold font-size-xl">
              <a href="https://bvgindia.com/contact-us/" target="_blank" class="text-dark text-decoration-none hover-orange transition-all">Contact Us at +91 731 243 0000</a>
            </div>
          </div>
        </div>
        <div class="mt-4 pt-3 border-top d-flex flex-column flex-md-row justify-content-between text-muted font-size-lg">
          <div class="mb-2 mb-md-0">
            &copy; 2026 BVG India Limited. All Rights Reserved.
          </div>
          <div><a href="termcondition.html" class="text-muted text-decoration-none hover-orange">Terms & Conditions</a></div>
        </div>
      </div>
    </footer>

    <!-- Footer Ratecard Modal -->
    <div class="modal fade" id="footerRatecardModal" tabindex="-1" aria-labelledby="footerRatecardModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content rounded-0 border-0 bg-warm-lightest">
          <div class="modal-header border-dark-transparent bg-white">
            <h5 class="modal-title font-playfair fw-bold" id="footerRatecardModalLabel">IDA Commercial Spaces Rate Card</h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0 position-relative">
            <div id="footerRatecardMap" style="height: 80vh; width: 100%; background-color: #e9ecef;"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Inject the footer into the DOM
  document.body.insertAdjacentHTML('beforeend', footerHtml);

  // Initialize Leaflet map only when the modal is opened
  let ratecardMapInitialized = false;
  let ratecardMap;

  function initRatecardMap() {
    if (ratecardMapInitialized) {
      ratecardMap.invalidateSize();
      return;
    }
    
    if (typeof L === 'undefined') {
      console.log("Leaflet is still not loaded.");
      return;
    }

    ratecardMap = L.map('footerRatecardMap', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2,
      zoomControl: true,
      attributionControl: false
    });

    const imgUrl = 'img/RateCard/isbt_kumedi_rate_card.png';
    const img = new Image();
    img.src = imgUrl;
    img.onload = function() {
      // Leaflet uses [y, x] for bounds.
      const bounds = [[0, 0], [img.height, img.width]];
      L.imageOverlay(imgUrl, bounds).addTo(ratecardMap);
      ratecardMap.fitBounds(bounds);
      ratecardMapInitialized = true;
    }
  }

  const ratecardModalEl = document.getElementById('footerRatecardModal');
  if (ratecardModalEl) {
    ratecardModalEl.addEventListener('shown.bs.modal', function () {
      if (typeof L === 'undefined') {
        // Dynamically load Leaflet CSS
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
        }
        
        // Dynamically load Leaflet JS
        if (!document.querySelector('script[src*="leaflet.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.onload = function() {
            initRatecardMap();
          };
          document.head.appendChild(script);
        }
      } else {
        // Leaflet already exists
        initRatecardMap();
      }
    });
  }
});