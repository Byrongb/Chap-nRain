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
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/fife/AGXqzDk9CAOz-_dGhoZPN8EDPcTaoN8M15r_lVvEin1cLXJTrPJgtnG1LKDADY2-hvOExC1ZzKKlX3-SqhJTDysNMHqwFiV_d05LBo_bg8wL_fRVcp28YVMjxeyfyCfnTvkePasD7R0EXmavbItPWm7yj8lto6hz_FvnE1rr7GbxHKwAMAgUHS_DC1JrVjUa_zwcJun4yGaQK8sMohyPJ16MFX4kgJkomGyG_IkugFnhRRlqjpXxRlbn3mGq52_ilvkGofeMY6YrlJOLtJnwUl9UW3BqMKxVAksQLafSsrHlic3xElgxFmZV1G9F_zspBo9r1OKkm0h_BnZevR4hiiEd3AEYn6aP48CqRyCHvFIjnQY7x9y8GnnKeY0IGa_NlkLMoyGRM951ikIDu7IRx7RQU3Rv50dfvN6GehIVdKmcLBnvSOIU8lKl_DQIhc_BZZEZAk0q3hgwLggsaLnrScrGvTDFzVBGkiAuz0Lmna16OtV4K9HHWkKv7QyjkI7LsLgVelk_b4W14IPVz1ZAFARWTI5892pr0z3Ya-X9kCr58o8rEeOqDbVGIMP6azk4neAngLazx1D1fkH3u0K8_-XSWQejWZ-Q-g00xAxiMU2ieKFXtCzlChpGly3128zdhgHY1iG9xJJzbV5ANi1HudgVEr1uqJQQ0U7_9zGqE6ASZnOM9yfv5m5fkLsQQmmwdM6rsN7hGadQ6f-Voc4W7AOyoYQ4rx-dEz6YeHtQPR1z9664yhsnOn3BvVTH4AyzDECQJVKVXPGoOJAg0Nyqjpj88L6TKLlIR03zStwLPpIHN1e04gm158zHgrm_fqVDnZfHT84E78qpDI5w4OsXAtjE2_A3EZQDrYIM735IA6O0v8QgJ0ENFulK_NOrALSbqAN_xO6tVo8qSkUs8DKB6Mv4FNNHpz1Vf-KIsHunUMFIcVYbWyc_zE7c7nVWFZ-wc0h4d6mUDS1iy-SCRj_nsuUSEHhYJzXVAUgLyOK7sC3_7zYDVmvOMugalVNu375QkAWk14R8Ts4jCqnROzSlLTahjsqZ1-oPP-BiV-eL5BzDlgXH1KMTBRaxVJn-bTHRxRxbgVT2S6XqUDUvhyRMQfhpP17TQkAIDJBwveeL1ox8DGPkVnhqRILamAotnhhTIBtMUHtkdumlhjWsPfCzV8rXhX1lGtcvMVgM7h1HQ_D4onH2yZoqbP2Wll5U71nfKTiKrcEmfmm5pjZ90dJwSVbtTZu6D7et1tee36IPDgLepHb-b-ZDihYdC4UJ1fwhawSHauD_7yyfYdgHQSdE3tuqdL9KLSjgk7BeXCByOFkC6m0vtDWU7XPa6Ixj5GNU-qx31aZfsYGwOBmaMqLPj7yDHyJf4kU8zQB7axiRFbCnb4uTKCYayDhIq5tHw78FOdHvQz2p5o8WIJ7-loiJXw_e9m2xM_91SnApL3L4QGd3D-s9Pi4bMhrQ1nJrtpMYZNzOlbDGPrDQAwXZHgVAqQtWhd7oYRaD6NtYw16d995g4T5f4pEzc6NADyuE6Gw_aNFMP0znMKvGJyfnUxQN-7PMpqy3caxaq2ATQLnIwUF2RL0UCrsC0RM6rAWiksXsidNxlsrKdgdsP4_Zu6Ute6Z0waFKNU0gQ0yzsp8Ln_aZFAf0Z6R1o4ADYSleGPPJkEkZVSBGoMYRp1q0muEW8ogjTf92oVz4hUqnoIQTMHBK=s447-w297-h447-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">STARTES</span></div></div>
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/fife/AGXqzDlFaj35Ux_UaGKtcfByi8R4CvDzSG0krHuIc2o5dtlrWwYjTxTnDJFmdDTZP0vNRQdVNdTDcyAgqFPvcE3QReScTB54kRsFEM3Tx8_OY_EKrNyjBng0cISeI0uT-2-8Mp_mBQj9yowzuZR2SvNGxAe-XmWtqrq9NKmJ2a2XMQfav2EAuHbyJqIL1IvDe2iWD787BATaieDW5461RmvNSs0Wz-VxmdPGpEFmzQoMiTfROvyrMU-fqnQc3Nk7P-svVwVTW3OWQuCMrnthC_QzaJsCpB6DMNKLdlS9wzfUO4GsszTGF2kEyHoRJ8NWELKHOnS6HWLL4wYABj3XeBUU6LXUI_PyIYRmcTjupWXXTVEjyRuKAgQnMJFZlecPJ-R7UGQuJ4XNVD7h1caxqKSjkZdI1bs3480sEw94odpoAFkv87N9LuwiQluuRR-U1wfPatiBU4tNYJvRaYjwqHX9tvgdpQmJ0KcuOmWHjwOY6MHahm4icJa-djBOxyAOnTFgxxNIpNynwGNYh6nZSqL7Cs7hG1OcO61EKCB1FZv_Oiy5Gem4EN7uFP9pYV4V0tnTJWoUyNCPcig1pWbxVbC8G3LA65O3ZuKoz8SK-ev8A5aqqcBHcpDOhJLYWKsmoXbaFFVrEBgfV9WzuAlRFIddqHCblQ7vK7ny3Rnoo9tZUVWuup1Klq0Uu3DpQJxm4pOy9lq9bOVxh2x29s50HBGI6CqLeHJQwo3EEZCGGo_c6WX56nL8RukzR96MZWEROaD38D6Xxx8ImXVAXuX19fvKkPW3-VAkxPur0Vi2sU_gmGZ74zZKLKSMJkw_QzrBXHog14rJSRFKJJLb7yX8SrZ0LUGabOzSD2z4o5ncxLTOORrpk6XnvKLTT8S4SdHRbbW6GtnwcTkWgpLzIdGOEguoiIeALYzBxLW3uWBsxdmLL7TGI_s_08Li5ty5pWEzyBQEW2I-TSdIsBDRaaENjdI7ZoYOz2gAXc5GmvYP_E0hGR0ro-nBJv35UvFmxusSSymysbjcfY0Z-19OnwOHHh3gU_ZL-N8kR0LEnqdUE5hv8nj-taAjouIHXgZ7NtL6Sr0bsn6lk8OYp6vQbVpydBOSo5HXfY_gk6y4kkLHR0Pg6qZjg_Amcc4uqUQYXWS86GrfeWWtOMMLbfhNAf0q7Cp3lEsAhaObIh60ENZAOfC84loISRhsArG7_bjH-sJtNP9oMoqSSfz6S6dRmD8VXQyoTohvALS5ojijrwxmdXr9Wort_JqObLWIFmovvVrioA8DFNOkiQy3DJeIXl32BGc7KwdFA99hCqPlz7hU582KIKpEHcNc6BmgZZ-t49pdqxaUzhCBr96mu0H7vM-4v0_rXKBa_UhqV8Ahk2TbTZrR1aS8WqmDHP2FbtcbWRPZvt_6a-VgaC_V0XRviSjO1QsQUMSplm1vT-9VxU4LzlAnxlZfVkI6Tqp96kZBmWG_VnTnK9sVu3LRRL899RGBO3HiSzmLcd5rVGrWjyLtRZB6w_QZaOKYt0H4CMCZneLevb6539q1iiShTpsbbGek7yFXrfnJWaIBDd9rwcMd77J_MYbCgA23U2j2gij5w7gtlIxrK5L00UlO7mDf6xl563lWIIGkJfH0gfeFWZwbmeYENx7bAjDtZA--9LidW4isVZd5jJFoSfNfN3G5avuOdPi2wdXcFJ5kVNAH2rKbFcLx=s490-w482-h490-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a> <span class="rectangle-name">MAIN COOURSES</span></div></div>
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/fife/AGXqzDkZqfoPLyBZ8WGpF_rvyW8PT-i6aPMfCNZ1Ggh6McipN359iyeWeH8O9AjocXZsZ-jehUGSR-EmVh8H-Wimfvc6nHpfbPUTZGmbpHaDQjcJePg1Skbh7o-Fen7Zb85RyScWUZsyPsdeteKNQj3CzgdWdQPcBDiSjp8RlIG3QdOrhRJBdeLKHyo_1Ec67AiqhTntCnRUYJvmpRpNZbkHExuOGP0yfQ76pKZbPWdLgx6KOSsBkFzBhsP0KzeekgITabPMigAuz3bN-Jlokxyshf5wDWM8x6ZUTO2BBiAPI0qAlhP-dnuyjXBnSLnhSPU06KIUd3ot4yJzQxcHrTPoWF-oH7lCEN1uloym2lfPj4eMLCyiNPOo8W4V7NoAPHVOSH6wLoEOQZ7w1EVd5O5NC0rixAY8LTuf0Ti3cIWxWvRuczIDB1qyTR-VtXvjvUAwNnumeQJICKHKoks1lRrxU782ysmOAPlW8uPvUxJXg5-yC1N7c4eUaE9mDg2K_vgpLQsKzMS09BbykXg6k4TOXyIZ3alxWkPoFY-8JeURLCFebfj_TynWvVjmARF29p9H-eE3QtqTN33N3nw4V9qwk4snRR3bBkTQrQ5Oqsp-OQVNsQHdKTdD84lkWTEHzCUJCB1OBXp4_81pJ3GYoaWoUBdgbStHN3H2qdCrZRQmUCmnrmUcKamPdhWTwmrGmx1lyDrib9VizjMxW3Y7frVdDkaTDfrhlW135JgFJ109jimTJdR0Wgr27GuqfcFY0NKRzjRvka1dV2RoZcCzRPya6kxTmSscDJ5wlsYr2tmSdnwF49u2tPvI5fOpy058fuBhqG9bzLSqJTITrwzdMJlivlzuSee6ZJXc78mS_3sW7ZDlDGQqzJkZugcFU4YkFGo6QcJFk_UtoTrHkqJAkIUaQsQ2Y_eHM_WSRhqUdy5DJpcmw6jRRPbequhxcCl2AK8QcOjcMUFBt1o10bSf-mjhFOOGfqaNHxuQifFHsU7PU9UCzf5r30XmuPpQQ--DRENppu4u51sLHq9pwhhpK06yqswtY-9M6gJLzXKY2hgQaH8kodQxWhhwOeQSQzMJAvCTlDmZJDqhfe1AR0M5a_eMCXCHppsMMwdJAClo1U-6p2dEu_tS23Tan8XOmCMnTSPOiMNbXtMufqzwHWZ84rfdQj7QMy1xH5Po6d2wif1tMaquoqDHq8DrzZh6JOB7B0ScLWOOp9bspFyv3c6Agz_9G090qQ3RQY8gD2f2w5EwF7zZex6Zkol1BwlrpD0pGQ4XnvlnQNulVBLOJAU9i1ELk5a3zfVSPMApdR_iX73vAXQZtbbtVlphM6FDuXwU-_UPqbWK8nePT1CdQmx1QWitQdO49ZXUIybjCbsi0gY2S-knghfMWAVrAAKc7aBdt0Dij1EOFu3XRsb734C-wn-589-u5o3oRT9bAY88w8j_F87dhg3YsQesq2kusezjgsfBXXa6brMs-VnJsy-vs7MOZ-PqcuehmGJ8ueYM0_OX8qt3pYGea28UF6Jcx7ZdgkJ40xSL5DwtKvZYCsOfMKr0b3TrYiMZKhrSQYXjbFkRIbOvPT4cRv_IVRFj--ohHart_Sd_8vWW10TeNmzw4HMypeCXQOFpxL-msl-fbpc96YOE6b1dtV-u_p70NM9KScrw15XE_-Tmif05DzQp5XFbbHZkJdn975sQiI8uzAC5=s486-w241-h486-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">CHEF RECOMMENDED</span></div></div>
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/fife/AGXqzDljQ1_pyB9MH7ANTdMWm7Rk4ey1QYSgpnH25CaQxCTjAU86FNqAxHxtkquH6bY7HoFGoszOAkMWEvKtxvg5bjmVTRr4L4_Cnbar-hiSfwDIPQxFx1XpJ8ZHIibvEhq2ECA4Da1Se3JY0o6GcLMDYnSmbDzU7UVbeCUvsbxrATJpVy415FN731SVxXmQ7Ohc1DepzU5TlBVB274QOd_vM9z5z0moHNTy6TFwiuZgEuIpC8i7yhplu5JaCMDJDXLNfp-y2klLzl6ETB651_xpNPBV1zYnLt7dNa4rQNzpy7n1fDRcibkR-Go6wiyxVSeBrn9bM5eNgq4wunAk3qJFQAp-q_ovSZJ7Uqjx3LhiojaYJi1jXCFEQG6qFI5fnuo3e40CsY1hkLIZIs4cWYxvRKYd9hU9zfhGgENOySiTGM6cmZkZJGjBwPeWa_1MJHZ5iVKVXvF3TlDMZyaSSs5J158_vkl0tMAgcjd6TxiCxJvYThYKcqDPXiK9xJlUGXJmkC0ppTXugW7scMM6K3CAUxvAaqY_fW0C9Dl8QErE5qm0RJFAO9Hmu8asY9zNj9NPwKIBEbfD82xnXxaOkqAH6s86LWkbM8HW-kjYjNmG6zpacAQhUZRsi_rEw5k1BHDZ9nb0fB8mRH8G8RswWLnKbZ3Eoq9zCFm56AKp4g_PJrbi8w6IaX2Ld4ansz5d1ojQ5LZF5OsprV_KsYetILc_9vatxEe7vSS-SbTDs1V4YqIBGtMMGbFBRj38QwHxxEGKGvkhvEF_e3XouoGO1mDWzyA2bJrU6UK1flcKVrB77_wvEicQ9INZpQQ_PTKU8hVQkXmCsRJMpSiHGXk1WHplT4rowBqV8QVLNhkLclR6gtEWq598TzkpEhfwrS1jxglhKee_j-z_ObG0sEtx1Kwi9_IjKqjEYl6tO19rSpdWDeJbX-jXfEUoNHVa9KtaiF2lR9YOnIb-iRyaCmvtIkyiqwcMZJD9hJ6mkMKdODPX5nghX3JaXmqryFum9h_423dcQs3LaQ3_l83sInHa65JQB8m6Fd9UsJciApCqqrAtgV2HeF_Fyp-Yrw_6yRZIgR7DQFBCSO9x4xUnov8mal1LZpVYzQG9oBE29cdss6UUOsgcgzrE-gwnMTicQuDHPptCnZPowcpTvNWltU_5tRZetbtuf_ulveNuqaCDP9vUoZYYfSals1ogbzLIyVBZmnuzVosCliHkkQ6JbQwfUJDC9lJ-SYOOw09ZymvL2PFvAdimfe-Ig8XeW99ktt8aHh8YfgdgL-uYZa1ehwHUAEkhXAUj8ADSYVxSwTY1gjrRhoUd0mwAp1XAzIIbtQS7ihDmnmVWREqP2QrpLJNDl4GqBkzlxRLreG-fhWGyts1EDGj9av8geN-oU1hkWyAcE_egz3EXuD9evRe5ngJzYDM7m_mG8dPVd2DEZO10KG1W29MUTUYH_YR3fPsEGdu_ezPppAQ_VJllAOfsL6X_u1iAfWh6SAbdtarfJqeY8NcI_pBzF0j6tc_YwHJ5sWCyXi31DzNbKmeJqt2BXKR6ycaAXs8_gMmkMmAJgxxDcRpINCaapY7AjO3mfYjRckqZRUefZ9g-XUBrNPkVJ0tF1E8DaqBFQQoXTfP_2t1qg5zuS6u_0WXi770hesIi1GFz_rUD1GELDhydsG8_1R7YaKZDgPB8vkYAFLtXmuG5Uobu=s486-w477-h486-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">DRINKS MENU</span></div></div>
        </div>
        
    <div class="contenedor-origins">
        <h2 class="titulo-origins">ORIGINS AND INSPIRATIONS</h2>
        <div id="container-origins"></div>
    </div>
    
    `;
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


