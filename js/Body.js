document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.querySelector('.main-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    }, false);
    
    // Crear el contenedor para el título y los rectángulos..
    const section = document.createElement('section');
    section.innerHTML = `
    <div class="content">
        <h2 class="title">VIEW OUR MENUS</h2>
        <div class="rectangles">
            <div class="rectangle" style="background-image: url('https://acortar.link/dcLWNj');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">STARTES</span></div></div>
            <div class="rectangle" style="background-image: url('https://acortar.link/Clh9By');"><div class="zoom-container"><a href="#"></a> <span class="rectangle-name">MAIN COOURSES</span></div></div>
            <div class="rectangle" style="background-image: url('https://acortar.link/xG29XR');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">CHEF RECOMMENDED</span></div></div>
            <div class="rectangle" style="background-image: url('https://acortar.link/GRxkO2');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">DRINKS MENU</span></div></div>
        </div>
        
    <div class="contenedor-origins">
        <h2 class="titulo-origins">ORIGINS AND INSPIRATIONS</h2>
        <div id="container-origins"></div>
    </div>

    <div id="carousel-containerop"></div>
    <div id="footer-container"></div>
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
            <img class="image" src="https://acortar.link/1rhKTF" alt="Imagen 1">
            <img class="image" src="https://acortar.link/Clh9By" alt="Imagen 2">
            <img class="image" src="https://acortar.link/4sQs1W" alt="Imagen 3">
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
    // Ajuste para el desplazamiento más corto: Cambiar el valor de -100 a un valor menor..
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



document.addEventListener('DOMContentLoaded', function() {
    const carouselContainerop = document.getElementById('carousel-containerop');
    const opinions = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            title: "Opinión 1",
            paragraph: "Pellentesque habitant morbi tristique senectus et netus.",
            stars: 5,
            author: "Autor 1"
        },
        {
            quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            title: "Opinión 2",
            paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            stars: 3,
            author: "Autor 2"
        },
        {
            quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            title: "Opinión 3",
            paragraph: "Excepteur sint occaecat cupidatat non proident.",
            stars: 4,
            author: "Autor 3"
        }
    ];
    let currentIndex = 0;

    function renderOpinion(index) {
        const opinion = opinions[index];
        const stars = '★'.repeat(opinion.stars) + '☆'.repeat(5 - opinion.stars);
        // Añade transición suave
        carouselContainerop.style.opacity = 0; // Inicia la transición de desvanecimiento
        setTimeout(() => {
            carouselContainerop.innerHTML = `
                <div class="carousel-arrowop" onclick="move(-1)">&#9664;</div>
                <div>
                    <div class="quoteop">“</div>
                    <div class="titleop">${opinion.title}</div>
                    <div class="paragraphop">${opinion.paragraph}</div>
                    <div class="starsop">${stars}</div>
                    <div class="authorop">${opinion.author}</div>
                </div>
                <div class="carousel-arrowop" onclick="move(1)">&#9654;</div>
            `;
            carouselContainerop.style.opacity = 1; // Finaliza la transición de desvanecimiento
        }, 300); // Ajusta este tiempo según sea necesario
    }

    window.move = function(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = opinions.length - 1;
        else if (currentIndex >= opinions.length) currentIndex = 0;
        renderOpinion(currentIndex);
    };

    renderOpinion(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
const footer = document.getElementById('footer-container');
    footer.innerHTML =  `
    <div class="footer">
    <div class="footer-column">
    <div class="logoF">Chapín<br><span>Rain</span></div>
      <p>Comprometidos con la excelencia.</p>
      <div class="social-icons">
        <img src="icon-facebook.png">
        <img src="icon-twitter.png">
        <img src="icon-instagram.png">
      </div>
    </div>
    <div class="footer-column">
      <h3>DESCRIPCION GENERAL</h3>
      <a href="#" class="general-link">Hogar</a>
      <a href="#" class="general-link">Menus de comida</a>
      <a href="#" class="general-link">Entrega en línea</a>
      <a href="#" class="general-link">Sobre Nosotros</a>
    </div>
    <div class="footer-column">
      <h3>RECURSOS</h3>
      <a href="#" class="resource-link">Centro de ayuda</a>
      <a href="#" class="resource-link">Condiciones de uso</a>
      <a href="#" class="resource-link">Politica de privacidad</a>
    </div>
    <div class="footer-column">
      <h3 class="footerFont" >DATOS DE CONTACTO</h3>
      <p><img src="icon-phone.png"> (206) 123-4567</p>
      <p><img src="icon-email.png"> email@example.com</p>
      <p><img src="icon-url.png"> www.example.com</p>
    </div>
    <div class="footer-column">
      <h3>UBICACION</h3>
      <span class="address-icon"><i class="fas fa-map-marker-alt"></i> 1234 Pike St, Seattle, WA 98101</span>
    </div>
  </div>
  `;

});


