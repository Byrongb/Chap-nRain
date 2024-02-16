
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
                <div class="carousel-arrow" onclick="move(-1)">&#9664;</div>
                <div>
                    <div class="quote">“</div>
                    <div class="title">${opinion.title}</div>
                    <div class="paragraph">${opinion.paragraph}</div>
                    <div class="stars">${stars}</div>
                    <div class="author">${opinion.author}</div>
                </div>
                <div class="carousel-arrow" onclick="move(1)">&#9654;</div>
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