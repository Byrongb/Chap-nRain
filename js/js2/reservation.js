document.addEventListener('DOMContentLoaded', function() {
    const reservationSection = document.getElementById('reservation-section');
    reservationSection.innerHTML = `
        <div class="reservation-container">
            <h1>MAKE A RESERVATION</h1>
            <form id="reservation-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required>
                </div>
                <div class="form-group">
                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required>
                </div>
                <div class="form-group">
                    <label for="guests">Number of Guests:</label>
                    <input type="number" id="guests" name="guests" min="1" required>
                </div>
                <button type="submit">SUBMIT RESERVATION</button>
            </form>
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
          <div class="social-icons">
            <img src="icon-facebook.png">
            <img src="icon-twitter.png">
            <img src="icon-instagram.png">
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
      
    });