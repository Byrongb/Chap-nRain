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
                <div class="dropdown-content">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428344866_1143100170014973_3213477673963442702_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=lE1OIgx8qcAAX962cJC&_nc_ht=scontent-sea1-1.xx&oh=00_AfAFSC6Z3AoL5-whl_P1u_YDwnDfrkJqknY8DlBv9kzXGw&oe=65D5E818" alt="Imagen 1">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428365602_1143100366681620_9055433000204666102_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=apEBWmftkWMAX_XzpcP&_nc_ht=scontent-sea1-1.xx&oh=00_AfBWoevXpo2NWEKVF5Iyds3R4rbwl_gj2PU_UUH9pRcwyw&oe=65D577E1" alt="Imagen 2">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428291931_1143100326681624_4889427973443097468_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qf83nk0xIxIAX-NSUeF&_nc_ht=scontent-sea1-1.xx&oh=00_AfB1AY2hc0Heu1h-M9FYSDjZ4WuJ5j2RFGH5qi-tpura_A&oe=65D70ADE" alt="Imagen 3">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428341410_1143100280014962_3973603968050105591_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=J8RuviqeJpsAX-tedR5&_nc_ht=scontent-sea1-1.xx&oh=00_AfCKxcQxPFVj1VQUhiSdoqOJYnKtl8fWuheXa7CHRDguAw&oe=65D584BC" alt="Imagen 4">
                </div>
                <a href="#" class="menu-link">About Us</a>
                <a href="#" class="menu-link">Blog</a>
                <a href="#" class="reservation">RESERVATION</a>
            </div>
        </nav>
    `;
    document.body.prepend(header);

    window.addEventListener('scroll', function() {
        const mainNav = document.querySelector('.main-nav');
        if (window.pageYOffset > 80) {
            mainNav.classList.add('fixed-white');
        } else {
            mainNav.classList.remove('fixed-white');
        }
    });
});


