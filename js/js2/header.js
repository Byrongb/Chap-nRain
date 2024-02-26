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
                    <img id="menu2" class="btn-menu" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428467818_1144279563230367_9211974962490986847_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=u_iWVvkewjIAX9Jx0gP&_nc_ht=scontent-sea1-1.xx&oh=00_AfAm1DST-z2eyOrdwwjqJRXOQpjZZMx44RjkvW-AuPKfGw&oe=65D826F9" alt="Imagen 2">
                    <img id="menu3" class="btn-menu" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428464339_1144279566563700_1999147457296360238_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ytUCNLDsSTsAX9g_cbS&_nc_ht=scontent-sea1-1.xx&oh=00_AfCZAaEEoiSnB3jScx8o7PuzFHsWBqGzjXB_5xwXmUNoxw&oe=65D8A2B8" alt="Imagen 3">
                    <img id="menu4" class="btn-menu" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428491929_1144279653230358_3352286630633181731_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Av9BoQu9ew4AX_dTJGS&_nc_ht=scontent-sea1-1.xx&oh=00_AfBFPdfXmT7RmQ_N7p3nEm4Yy4HLrswWeOE4QJTpbUEOVg&oe=65D971F4" alt="Imagen 4">
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
        if (window.pageYOffset > 0.1) {
            mainNav.classList.add('fixed-white');
        } else {
            mainNav.classList.remove('fixed-white');
        }
    });
});


