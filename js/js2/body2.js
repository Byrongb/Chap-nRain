document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container-originsGY');
    container.innerHTML = `
        <button id="btn-gallery">VIEW GALLERY</button>

    `;
});

document.getElementById('btn-gallery').addEventListener('click', function() { window.location.href = 'gallery.html'; });