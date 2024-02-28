document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');

    galleryContainer.innerHTML = `
        <div class="gallery">
            <h1 class="gallery-title">Our Gallery</h1>
            <div class="gallery-grid">
                <img src="path-to-image1.jpg" alt="Image 1" class="gallery-item">
                <img src="path-to-image2.jpg" alt="Image 2" class="gallery-item">
                <img src="path-to-image3.jpg" alt="Image 3" class="gallery-item">
                <!-- Añade más imágenes según sea necesario -->
            </div>
        </div>
        <div id="footer-container"></div>

    `;
});



document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer-container');
        footer.innerHTML =  `
        <div class="footer">
        <div class="footer-column">
        <div class="logoF">Chapín<br><span>Rain</span></div>
          <p>Committed to excellence.</p>
          <div class="social-media-icons">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h3>DESCRIPCION GENERAL</h3>
          <a id="home" href="index.html" class="general-link">Home</a>
          <a id="menu" href="startes.html" class="general-link">Menus</a>
          <a id="deliv" href="delivery.html"  class="general-link">Online delivery</a>
          <a id="about" href="about.html" class="general-link">About us</a>
        </div>
        <div class="footer-column">
          <h3>RECURSOS</h3>
          <a href="about.html" class="resource-link">Help Center</a>
          <a href="about.html" class="resource-link">Terms of use</a>
          <a href="about.html" class="resource-link">Privacy Policy</a>
        </div>
        <div class="footer-column">
          <h3 class="footerFont">CONTACT INFORMATION</h3>
          <p><img src="icon-phone.png">(206) 123-4567</p>
          <p><img src="icon-email.png">email@example.com</p>
          <p><img src="icon-url.png">www.example.com</p>
        </div>
        <div class="footer-column">
          <h3>LOCATION</h3>
          <span class="address-icon"><i class="fas fa-map-marker-alt"></i> 1234 Pike St, Seattle, WA 98101</span>
        </div>
      </div>
      `;
      document.getElementById('home').addEventListener('click', function() { window.location.href = 'index.html'; });
      document.getElementById('about').addEventListener('click', function() { window.location.href = 'about.html'; });
      document.getElementById('deliv').addEventListener('click', function() { window.location.href = 'delivery.html'; });
      document.getElementById('reserve-now').addEventListener('click', function() { window.location.href = 'reservation.html'; });
    
      

    });