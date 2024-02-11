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
            <div class="logo">Chapín<br><span>Rain</span></div>
            <div class="menu-items">
                <a href="#" class="menu-link">Menús</a>
                <a href="#" class="menu-link">About Us</a>
                <a href="#" class="menu-link">Shop</a>
                <a href="#" class="reservation">RESERVATION</a>
            </div>
        </nav>
    `;
    document.body.prepend(header);

    window.addEventListener('scroll', function() {
        const mainNav = document.querySelector('.main-nav');
        if (window.pageYOffset > 50) {
            mainNav.classList.add('fixed-white');
        } else {
            mainNav.classList.remove('fixed-white');
        }
    });
});


