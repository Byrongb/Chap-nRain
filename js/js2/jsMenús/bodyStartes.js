document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.createElement('div');
    heroSection.className = 'hero-image';
    heroSection.innerHTML = `
    <div class="content">
        <div class="hero-text">
            <h1>STARTES</h1>
            <p>Enjoy the best culinary experience with us.</p>
        </div>
    </div>
    
    <div class="containerMenus">
        <div class="sidebar">
            <div class="restaurant-logo">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/428652446_1147418989583091_8085888128990488272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=IdauGgMYs-AAX-qTIgt&_nc_oc=AQmPil8sjzhSv1E-G8eiLfv71RubO10QD6Y11YNG-HeNVMf8v60VZy9E2tE5NReIXwGhDSG5Qihv_5qbGUF94qij&_nc_ht=scontent-sea1-1.xx&oh=00_AfDadUc2fJxf2otvLwoTQtFYrgLkycX0ZxxGyX5zUYz09Q&oe=65E0BE6B" alt="Logo del Restaurante">
            </div>
        <h2>OUR MENU</h2>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Startes</a></li>
        <li><a href="#">Main Courses</a></li>
        <li><a href="#">Chef Recommended</a></li>
        <li><a href="#">Drinks</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Delivery</a></li>
    </ul>
    <button class="reserve-now">RESERVE NOW</button>
        </div>

        <div class="contentMenus">        
            <div class="content-box">
            <h2 class="menu-titleM">STARTES</h2>
            <div class="menu-itemsM">
                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>
            </div>
        </div>

            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429492497_1146767052981618_3904851544229404517_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ne4bEIyx0hAAX-QcA1e&_nc_ht=scontent-sea1-1.xx&oh=00_AfCY8Rr88GYOmyXQDtEDFDEQQq3U2k-1xZS8E2cHrTfpOQ&oe=65DEC780" alt="Imagen 1" class="content-image">            

            <div class="content-box">
            <h2 class="menu-titleM">APPETIZERS</h2>
            <div class="menu-itemsM">

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

                <div class="menu-itemM">
                <div class="menu-item-image">
                    <img src="ruta_a_la_imagen_del_platillo.jpg" alt="Imagen del Platillo">
                </div>
                    <h3>Platillo 1</h3>
                    <p>Descripción del platillo 1. Un breve resumen de lo que incluye.</p>
                    <span class="price">$10.00</span>
                </div>

            </div>
        </div>

            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429582833_1146767049648285_6633792576356285569_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=-X8bm2h03HMAX8fsssW&_nc_ht=scontent-sea1-1.xx&oh=00_AfB-PzMX2rC-Nd7PAO-Dj8O3Ix5NlFGD8GwenKQ_j7sxpg&oe=65DED38E" alt="Imagen 2" class="content-image">
        </div>
    </div>
    <div id="footer-container"></div>

    `;

    // Asumiendo que tienes un elemento en tu HTML donde quieres insertar esta sección.
    // Por ejemplo, justo después del header. Asegúrate de tener un contenedor con id="main-content" o ajusta este selector según tu estructura.
    document.body.insertBefore(heroSection, document.body.firstChild.nextSibling);
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los ítems del menú
    const menuItems = document.querySelectorAll('.menu-itemM');

    // Función para mostrar la imagen
    function showImage(e) {
        const imageContainer = e.currentTarget.querySelector('.menu-item-image');
        imageContainer.classList.add('menu-item-image-visible');
    }

    // Función para ocultar la imagen
    function hideImage(e) {
        const imageContainer = e.currentTarget.querySelector('.menu-item-image');
        imageContainer.classList.remove('menu-item-image-visible');
    }

    // Agrega event listeners a cada ítem del menú
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', showImage);
        item.addEventListener('mouseleave', hideImage);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    let lastScrollTop = 0; // Guarda la última posición de scroll

    function parallax() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Calcula la diferencia entre el scroll actual y el último para suavizar el movimiento
        let offset = (scrollTop - lastScrollTop) * 0.1 + lastScrollTop;
        lastScrollTop = offset; // Actualiza el último scroll para la próxima iteración

        heroImage.style.backgroundPositionY = offset * 0.1 + 'px'; // Ajusta la velocidad aquí

        requestAnimationFrame(parallax); // Solicita el próximo frame para la animación
    }

    requestAnimationFrame(parallax); // Inicia la animación
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
          <a id="home" href="#" class="general-link">Home</a>
          <a id="menu" href="#" class="general-link">Menus</a>
          <a id="deliv" href="#"  class="general-link">Online delivery</a>
          <a id="about" href="#" class="general-link">About us</a>
        </div>
        <div class="footer-column">
          <h3>RECURSOS</h3>
          <a href="#" class="resource-link">Help Center</a>
          <a href="#" class="resource-link">Terms of use</a>
          <a href="#" class="resource-link">Privacy Policy</a>
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