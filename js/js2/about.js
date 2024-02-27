document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('about-container');

    container.innerHTML = `
        <div class="about-section">
            <h1 class="titleA">About Us</h1>
            <p class="pA">Welcome to our restaurant. Here's a little story about us...</p>
            
            <div class="section" id="opening-hours">
                <h2 class="section-title">Opening Hours</h2>
                <div class="section-contentA">
                    <li><strong>Monday:    </strong> 9am - 10pm</li>
                    <li><strong>Tuesday:</strong> 9am - 10pm</li>
                    <li><strong>Wednesday:</strong> 9am - 10pm</li>
                    <li><strong>Thursday:</strong> 9am - 10pm</li>
                    <li><strong>Friday:</strong> 9am - 10pm</li>
                    <li><strong>Saturday:</strong> 9am - 10pm</li>
                    <li><strong>Sunday:</strong> 9am - 10pm</li>
                </div>
            </div>
            
            <div class="section" id="contact-info">
                <h2 class="section-title">Contact Information</h2>
                <div class="section-content">
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@ourrestaurant.com</p>
                </div>
            </div>
            
            <div class="section" id="location">
                <h2 class="section-title">Our Location</h2>
                <div class="section-content">
                    <div id="map"></div>
                </div>
            </div>
            
            <div class="section" id="resources">
                <h2 class="section-title">Resources</h2>
                <div class="section-content">
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="section" id="social-media">
                <h2 class="section-title">Follow Us</h2>
                <div class="section-content">
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                </div>
            </div>
        </div>
        <div id="footer-container"></div>

    `;

    
    // Añade interactividad para expandir y colapsar secciones
    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.classList.toggle('expanded');
            title.classList.toggle('active');
        });
    });

    initMap(); // Asegúrate de definir esta función para inicializar el mapa

    
});


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('about-container');

    container.innerHTML = `
        <div class="about-section">
            <h1 class="titleA">About Us</h1>
            <p class="pA">Welcome to our restaurant. Here's a little story about us...</p>
            
            <div class="section" id="opening-hours">
                <h2 class="section-title">Opening Hours</h2>
                <div class="section-contentA">
                    <li><strong>Monday:    </strong> 9am - 10pm</li>
                    <li><strong>Tuesday:</strong> 9am - 10pm</li>
                    <li><strong>Wednesday:</strong> 9am - 10pm</li>
                    <li><strong>Thursday:</strong> 9am - 10pm</li>
                    <li><strong>Friday:</strong> 9am - 10pm</li>
                    <li><strong>Saturday:</strong> 9am - 10pm</li>
                    <li><strong>Sunday:</strong> 9am - 10pm</li>
                </div>
            </div>
            
            <div class="section" id="contact-info">
                <h2 class="section-title">Contact Information</h2>
                <div class="section-content">
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@ourrestaurant.com</p>
                </div>
            </div>
            
            <div class="section" id="location">
                <h2 class="section-title">Our Location</h2>
                <div class="section-content">
                    <div id="map"></div>
                </div>
            </div>
            
            <div class="section" id="resources">
                <h2 class="section-title">Resources</h2>
                <div class="section-content">
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="section" id="social-media">
                <h2 class="section-title">Follow Us</h2>
                <div class="section-content">
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                </div>
            </div>
        </div>
        <div id="footer-container"></div>

    `;
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
    
    
      document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.classList.toggle('expanded');
            title.classList.toggle('active');
        });
    });
    initMap(); // Asegúrate de definir esta función para inicializar el mapa

    document.getElementById('home').addEventListener('click', function() { window.location.href = 'index.html'; });
    document.getElementById('about').addEventListener('click', function() { window.location.href = 'about.html'; });
    document.getElementById('deliv').addEventListener('click', function() { window.location.href = 'delivery.html'; });
    document.getElementById('reserve-now').addEventListener('click', function() { window.location.href = 'reservation.html'; });
  
});
