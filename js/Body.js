document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.querySelector('.main-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    }, false);
    
    // Crear el contenedor para el título y los rectángulos
    const section = document.createElement('section');
    section.innerHTML = `
    <div class="content">
        <h2 class="title">VIEW OUR MENUS</h2>
        <div class="rectangles">
            <div class="rectangle" style="background-image: url('');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">STARTES</span></div></div>
            <div class="rectangle" style="background-image: url('');"><div class="zoom-container"><a href="#"></a> <span class="rectangle-name">MAIN COOURSES</span></div></div>
            <div class="rectangle" style="background-image: url('');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">CHEF RECOMMENDED</span></div></div>
            <div class="rectangle" style="background-image: url('');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">DRINKS MENU</span></div></div>
        </div>
        
    <div class="contenedor-origins">
        <h2 class="titulo-origins">ORIGINS AND INSPIRATIONS</h2>
        <div id="container-origins"></div>
    </div>
    
    `;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.animation = `slideUp 3s ease-out forwards`;
            }
        });
    });
    document.body.appendChild(section);
    

    const welcomeText = document.createElement('div');
    welcomeText.innerHTML = `
        <h2 class="welcome">Welcome to</h2>
        <h1 class="chapin">Chapin</h1>
        <h1 class="rain">Rain</h1>
    `;
    welcomeText.classList.add('welcome-container');
    document.body.appendChild(welcomeText);
    
    const welcomeContainer = document.querySelector('.welcome-container');
    const heightToDisappear = 500; // Define la altura de scroll donde el texto estará completamente desvanecido

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        let opacity = 1 - currentScroll / heightToDisappear;
        let blurAmount = Math.min(20 * (currentScroll / heightToDisappear), 20); // Ajusta el desenfoque máximo

        // Asegura que la opacidad y el desenfoque estén en rangos válidos
        opacity = Math.max(opacity, 0);
        opacity = Math.min(opacity, 1);

        // Aplica la opacidad y el desenfoque al contenedor de texto
        welcomeContainer.style.opacity = opacity;
        welcomeContainer.style.filter = `blur(${blurAmount}px)`;
        // Cambio aquí: Multiplicamos por -0.5 para mover el texto hacia arriba en lugar de hacia abajo
        welcomeContainer.style.transform = `translate(-50%, -50%) translateY(${-currentScroll * 0.5}px)`; // Mueve el texto hacia arriba suavemente
    }, false);
});

document.addEventListener('DOMContentLoaded', function() {
    // Código existente aquí...

    // Inicialización del IntersectionObserver para animar los rectángulos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Asegura que el elemento sea visible
                entry.target.style.animation = `slideUp 3s ease-out forwards`;
                
            }
        });
    });

    document.querySelectorAll('.rectangle').forEach(rectangle => {
        rectangle.addEventListener('animationend', () => {
            // Agrega la clase para el efecto de zoom después de que la animación termine
            rectangle.classList.add('zoom-effect');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const backgroundImage = document.querySelector('.background-image');
    const heightToDisappear = 500; // Define la altura de scroll donde la imagen estará completamente desvanecida

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        let opacity = 1 - currentScroll / heightToDisappear; // Calcula la nueva opacidad basada en el scroll

        // Asegura que la opacidad esté entre 0 y 1
        opacity = Math.max(opacity, 0);
        opacity = Math.min(opacity, 1);

        // Aplica la opacidad calculada a la imagen de fondo
        backgroundImage.style.opacity = opacity;
    }, false);
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container-origins');
    container.innerHTML = `
    <div class="container-origins">
    <div id="carouselContainer">
        <button id="prev">&lt;</button>
        <div id="imageWrapper">
            <img class="image" src="https://via.placeholder.com/350x250?text=Imagen+1" alt="Imagen 1">
            <img class="image" src="https://via.placeholder.com/350x250?text=Imagen+2" alt="Imagen 2">
            <img class="image" src="https://via.placeholder.com/400x300?text=Imagen+3" alt="Imagen 3">
            <img class="image" src="https://via.placeholder.com/450x350?text=Imagen+4" alt="Imagen 4">
            <img class="image" src="https://via.placeholder.com/500x400?text=Imagen+5" alt="Imagen 5">
        </div>
        <button id="next">&gt;</button>
    </div>
    <div id="content">
        <p>We take pride in providing exceptional service, ensuring your every need is met with a smile. Our dedicated staff is here to guide you through our menu, recommend pairings, and make your dining experience truly exceptional.</p>
        <button>VIEW GALLERY</button>
    </div>
</div>
    `;
    
let currentIndex = 0;
const imageWrapper = document.getElementById('imageWrapper');
const images = document.querySelectorAll('.image');
const totalImages = images.length;

function updateCarousel() {
    // Ajuste para el desplazamiento más corto: Cambiar el valor de -100 a un valor menor
    const offset = currentIndex * -(100 / totalImages); // Hace que el desplazamiento sea proporcional al número de imágenes
    imageWrapper.style.transform = `translateX(${offset}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Hace el carrusel circular hacia la izquierda
    }
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Hace el carrusel circular hacia la derecha
    }
    updateCarousel();
});

});


