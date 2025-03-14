function Home() {
  return (
    <div className="home">
        <header id="header" class="header d-flex align-items-center sticky-top">
          <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
              <i class="bi bi-camera"></i>
              <h1 class="sitename">PhotoFolio</h1>
            </a>
            
            <nav id="navmenu" class="navmenu">
              <ul>
                <li><a href="index.html" class="active">Home<br /></a></li>
                <li><a href="about.html">About</a></li>
                <li class="dropdown"><a href="gallery.html"><span>Gallery</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="gallery.html">Nature</a></li>
                    <li><a href="gallery.html">People</a></li>
                    <li><a href="gallery.html">Architecture</a></li>
                    <li><a href="gallery.html">Animals</a></li>
                    <li><a href="gallery.html">Sports</a></li>
                    <li><a href="gallery.html">Travel</a></li>
                    <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                      <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
              <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <div class="header-social-links">
              <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </header>

        <main class="main">
        {/* <!-- Hero Section --> */}
          <section id="hero" class="hero section">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="100">
                  <h2><span>I'm </span><span class="underlight">Jenny Wilson</span> a Professional<span> Photographer from New York City</span></h2>
                  <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
                  <a href="contact.html" class="btn-get-started">Available for Hire<br /></a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- /Hero Section --> */}

          {/* <!-- Gallery Section --> */}
          <section id="gallery" class="gallery section">
            <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
              <div class="row gy-4 justify-content-center">
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="gallery-item h-100">
                    <img src="assets/img/gallery/gallery-1.jpg" class="img-fluid" alt="" />
                    <div class="gallery-links d-flex align-items-center justify-content-center">
                      <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                      <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Gallery Item --> */}

                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="gallery-item h-100">
                    <img src="assets/img/gallery/gallery-2.jpg" class="img-fluid" alt="" />
                    <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-2.jpg" title="Gallery 2" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="gallery-item h-100">
                  <img src="assets/img/gallery/gallery-3.jpg" class="img-fluid" alt="" />
                  <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-3.jpg" title="Gallery 3" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="gallery-item h-100">
                  <img src="assets/img/gallery/gallery-4.jpg" class="img-fluid" alt="" />
                  <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-4.jpg" title="Gallery 4" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="gallery-item h-100">
                  <img src="assets/img/gallery/gallery-5.jpg" class="img-fluid" alt="" />
                  <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-5.jpg" title="Gallery 5" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="gallery-item h-100">
                <img src="assets/img/gallery/gallery-6.jpg" class="img-fluid" alt="" />
                  <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-6.jpg" title="Gallery 6" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="gallery-item h-100">
                  <img src="assets/img/gallery/gallery-7.jpg" class="img-fluid" alt="" />
                  <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-7.jpg" title="Gallery 7" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="gallery-item h-100">
                <img src="assets/img/gallery/gallery-8-2.jpg" class="img-fluid" alt="" />
                  <div class="gallery-links d-flex align-items-center justify-content-center">
                    <a href="assets/img/gallery/gallery-8-2.jpg" title="Gallery 8" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                    <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Gallery Section --> */}
      </main>
    <footer id="footer" class="footer">

    <div class="container">
      <div class="copyright text-center ">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">PhotoFolio</strong> <span>All Rights Reserved</span></p>
      </div>
      <div class="social-links d-flex justify-content-center">
        <a href=""><i class="bi bi-twitter-x"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a>
      </div>
      <div class="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
      </div>
    </div>

  </footer>

  {/* <!-- Scroll Top --> */}
        <a href=" " id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        {/* <!-- Preloader --> */}
          <div id="preloader">
        <div class="line"></div>
      </div>
    </div>
  );
}