document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.createElement('div');
    heroSection.className = 'hero-image';
    heroSection.innerHTML = `
    <div class="content">
        <div class="hero-text">
            <h1>MAIN COURSES</h1>
            <p>Enjoy the best culinary experience with us.</p>
        </div>
    </div>
    
    <div class="containerMenus">
        <div class="sidebar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div class="contentMenus">
            <div class="content-box">Contenido 1</div>
            <img src="ruta_a_tu_imagen.jpg" alt="Imagen 1" class="content-image">
            <div class="content-box">Contenido 2</div>
            <img src="ruta_a_tu_imagen.jpg" alt="Imagen 2" class="content-image">
        </div>
    </div>
    `;

    // Asumiendo que tienes un elemento en tu HTML donde quieres insertar esta sección.
    // Por ejemplo justo después del header. Asegúrate de tener un contenedor con id="main-content" o ajusta este selector según tu estructura.
    document.body.insertBefore(heroSection, document.body.firstChild.nextSibling);
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
