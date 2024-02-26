document.addEventListener('DOMContentLoaded', function() {
    const header = document.createElement('header');
    header.innerHTML = `
       <div class="contact-bar">
            <span class="address-icon"><i class="fas fa-map-marker-alt"></i> 1234 Pike St, Seattle, WA 98101</span>
            <div class="right-section">
                <span class="phone-icon"><i class="fas fa-phone"></i> (206) 123-4567</span>
                <div class="social-media-icons">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <nav class="main-nav">
            <div class="logo"><a href="index.html" style="color: inherit; text-decoration: none;">Chapín<br><span>Rain</span></a></div>
            <div class="menu-items">
                <a id="home" href="#" class="menu-link">Home</a>
                
                <a href="#" class="menu-link">Menús</a>
                <div class="dropdown-content">
                    <img id="menu1" class="btn-menu" src="https://i.imgur.com/TpTLyB5.png" alt="Imagen 1">
                    <img id="menu2" class="btn-menu" src="https://i.imgur.com/TpTLyB5.png" alt="Imagen 2">
                    <img id="menu3" class="btn-menu" src="https://i.imgur.com/TpTLyB5.png" alt="Imagen 3">
                    <img id="menu4" class="btn-menu" src="https://i.imgur.com/TpTLyB5.png" alt="Imagen 4">
                </div>

                <a id="about" href="#" class="menu-link">About Us</a>
                <a id="deliv" href="#" class="menu-link">Delivery</a>
                <a id="reser" href="#" class="reservation">RESERVATION</a>
            </div>
        </nav>
    `;
    document.body.prepend(header);

    document.getElementById('menu1').addEventListener('click', function() { window.location.href = 'startes.html'; });
    document.getElementById('menu2').addEventListener('click', function() { window.location.href = 'mainCourses.html'; });
    document.getElementById('menu3').addEventListener('click', function() { window.location.href = 'chef.html'; });
    document.getElementById('menu4').addEventListener('click', function() { window.location.href = 'drinks.html'; });
    
    document.getElementById('home').addEventListener('click', function() { window.location.href = 'index.html'; });
    document.getElementById('about').addEventListener('click', function() { window.location.href = 'about.html'; });
    document.getElementById('deliv').addEventListener('click', function() { window.location.href = 'delivery.html'; });
    document.getElementById('reser').addEventListener('click', function() { window.location.href = 'reservation.html'; });


    window.addEventListener('scroll', function() {
        const mainNav = document.querySelector('.main-nav');
        if (window.pageYOffset > 80) {
            mainNav.classList.add('fixed-white');
        } else {
            mainNav.classList.remove('fixed-white');
        }
    });
});


