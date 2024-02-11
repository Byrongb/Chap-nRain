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
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV87bivTYJ5onqh0ulgJo7b2jEngF0U8tHGikJuozp3pmbxGaSIGHusPvv5RbpHMPGdY6YjpJOffMSYyBWglGIHE5r5pIOOxP-Fe0tZv-rCcJ0QjTuK7EjLUgwGuYd-ylBgAEqDEIDm--biq9nsZiVnIcz02VQiqG9PrHKOLuqxL7CSVi6KFHYK-HAQhRsXMUn-rhF0X91mWjGggnd86XOJOBn_pDOdZD0yv7ZAXKJq4ekYe7AJ5LYuu_kwecXvLXM1Ha28Y-bH8xS1W67MPjt1GpeT2CYjHOT-S1rmh-2s7b_Hx6jR7Qu_RxdZsp4B03fM-FC0NBvHfEZW6W6trXKq0N8dv-nJc1-HPeoySXUKvYdAGDjVMrWltRoZKrQ2eB3DrE3vFRmXGLthbatgb47P0nYYpfFB7zg0JUDItHeLSrxAvFu2LGtS2cm2VWEBmN0NfVbWMlPxXiHMrsdjV-zqHAK-nXlgrgYCYs7asKVn6mujGS-OnsJ0zQ-J6mXSmex_LlHU6AMi4Jo0H3nL2sDTUevZAHM9bjczzWTi2fmxB2GH8WFf1u6nrz6V17tosk1eCzJZxrmEY_15IzXBxOvc-MZKlvM_35jxynoRoA2B8ve7jRnjXToa3dRW1QBh8n6P2UhuEz0XnUc-vQPZ3JQDENTh-4_V0ettwU-98G1ya4OVBlVpfPUy6hrcxsChA0jxNYQIfOa8t4qOPD9YeD-bZ9Ea8JwNtxn50Mvl4gKf0eb2QcnTA1SiB-1yhpkCsVPQ_3DmlFOt78e47OySPipUvs66hNhEEaa1Zm_ep31mTWFSASq_zz7_E7zI-meC46qCmvOKyS_S_1uMXYa0dP1tRwMSkqMgwg10zNPph3DHsih_7zJQ_UsJBfj028GvpCxWGBL7StwGK7vCrC5QwlKI_lYw=w488-h482-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">STARTES</span></div></div>
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV84FfPBA5-ygc3dv1B0hshOBcyUBd5DbVtlTo1qjPLc6WBepjh34nsVOq-9TsRyesRS7Aw8Tuvpea6O402go6s-0KBkvbcjLYvtgf9RGAlkmloPEu5tqQuTyAf_lYG5avFywAhBDCe0JQPhKTinrjIV8d6MxqR31XI-dnr9ImP6jZxGx-srdvkelEBv_tvckqK-LcXIWun206-f45t8EOJ8_Wsra0QGTZckP5mLJv_3BuXWJh5JAsmPBhwI_maonl10VHcXrqeUoOpSwvNaTIrmSj4R-OQmrv2yKoL1qS_Xg6M7IbwSNdGYlntGhiawmqcWlCnFqEnu6uLU6EIMWFiHgzzhTjNBr9YAwAvHuscV-nyIBErzyHPZNojcCCDURUyY1jCVKaHo50YNcuxETMlKhPZdeXILiZXqacL6wKochTC9NLm2_w7AjBI58gFjuqi85lTAxR9D-MSBL6sbpaGTkC0ojrnrlaUYqpmjZo1CvDBrwZJRDAd-9uOztb2S-6XGceUr2ffUcMkjBGQn5We1BvyfbCRLI4-R3YpLbrkKYuZHJ4x_VXw6uzdAWUqQSoBlBLta7BT9E-wMLHkwzOisI4Gdy0VWix5OlcGQU6CLTmq3vSSLyrHtOxUu1kkaQWcJTkD002ZfD7lQSSGXopQu3gkJ18VtDjXo91ALd-hZwJn-M-FR4YEd5NyCq6sTBKtqP_v2kWlC5kfI6UuBIPe0ATNdpVvT1-h3-G4o8vBs7EpWWjPsm6M_W2PYMqa9iAMK63hFoDJgFWWULSGmt-eqbpv4MEWmMMIq5Z9kz-knIOWJwQAF0pTV4P9ysNwR7IUUsvIl0ub3JY2wE7YLaHDyqtt9hJWJklA4yORrsAK9S2yEdo7eXW9vpsb6YJbYNh1d9LS_F2cbeuqKynIepCD8ozQ=w482-h490-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a> <span class="rectangle-name">MAIN COOURSES</span></div></div>
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV85a-5Re0V48BsQSMrLdWjBnp6jFYTaL0ZtPbSownHr4gFAfskeMZtTpLgjhQmB6WzPEvOQ8qcjeDAMr2XZ9GTob12F9NYkXrnO4Cd8kxiRj8Wafyf7DCbHRpZeVerLb4fmbfpLQnbISUgSou6rncInfXai3Ohzux2h64Cuz_HAyaOteZA6rjWcry8jVYwXj65Q4z0G8uEApceM8UoqmvBNmhd4HX9b1HKsPEp_Fi6F9TWg0N6X6x8vgalhTAi9NrccGNu3_1WUQ7AbgleCD6CIsqXmnuY9J25s2zsTc6B4hDBftSsIGHgsg942z7zIgT47nptMxZMiQZRk84o8mRpBpimS3xQHFvVWmjq4Vx4-a_1ZBsZ2QCbNO39fPPWGizVd5nXncSAZnOZhkidorBtYkSK1CyoJS-h9FEDSlsCNHdlgPbYJWkL1hqTOQdfHvxM00NFPIc5cHQNSACcA4uRIKWW7oyv8ujdC1cRY_SUPEafdPndCvaF7xEDgRknroyd3QrBynge4CEbVXmjH7VW12azzp8Xr6DpGvZYLl_n3oyP98_sOu74cejPL0Dhe--m_-4d-kCuwPJ_EaXwZ8cGD33E2acTHeK_V67UwdfY9YgsFPc4-hvlVMOndeC7s89pCiLjWvh0O1UP59MVFtBZ3ZQvwPche0-edRp-1ffEqRMHcbhltk-gNFh06xJhfUvMcmScs6DKHOdg55x1e4F6RWjS5eOIuVXuiAcD-_detdDxbY7eG4lH6YYGaf0ug8e1ggoTG7wVnFmcU1McDnQRUxmDFfI9oQDA1q2FmLP0JfI1xik7T6Vmpu_fhTTXShKSWXpSkivtGr_ximq_MGrHsL9sunSJKzzdVrPvCw1M10eHFSHhCTH4XqDjZgU1jUZ_HtFlBCQFShD5w6iyePO5MVcA=w241-h486-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">CHEF RECOMMENDED</span></div></div>
            <div class="rectangle" style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV87NPECMyRe5u5vIlyEHL9dl2v4mTIZr8oRjqC4rjrHEsnMVOgjd4NwlHeaLXDwk3UeGwZ3uRXl68g7BGOxWkB5x89eYpioGqZzRzprfO5ACSGtfH644o9frnd4WtDB2QOM-L8Cx-6VAfCwNJw6iqC4dDqaopIBbR1ATdY4KAQfD-QMI6KkFgJ6rGRLSimBCSPJaGVWoEn7zdVMBJZmhHEUzizepwg-UU0H-LYPcIHtWZQAMI-g4sHYo9H6QiedxpgC8yOK8CgE8UxASOQDH8X_1chByg8X-tTe0_nAXKRupTbkwS0OVixqejGBbYoOnyicor3ZszHgP-tvLjCBI5vqNbSvw2dg1if7M0ZmuM9E-iEYZVi8s6If80h0KsM6mkyJu0FeKPTb1vv7CtGzjsi4pSv_aOvSemhFisZDfitS2je6kWurboGnj7Fau92q-oB_BMoWBtWi7OCqZlebiUydJdq7zKci6wUqEknn80-F5SKsXsgDcoIYQU4CVR-DW3BwtH86vlarMOPtgKXn2hIMu1Yw5yTHtHN2reQ43hhV5UHQOtFkwwXMipIrmjW2OJLCesxdF2XpaYv9GbF7SjzscjCZcv2IUJFJPomC24CVJz3xcNdK19GPtOGTEuaIUSXd61ikYfwaBYTqVNWU5aG1yxztKfsrKtpNJ2oWrN9155QyN6aonMLyyotP_MpNrizYv37_gkIFvJb4grEVUlriZl7Iaz74P0HBxh-j1f-NWC2j8Zq3efj9ajfma8yDJV1G7AqIBveyok46SMuKfyzZN0JdwslZHhTfhgKgLpdNuAtHIwxPmWB5y_N_WIqtIskkZ-mvP-FSZNfIW4weWNsuhBHcCbi8c7uGXpXp38C1-MylC1V9pMn8qoWLqclN7vaKID90TY0fhkr2D-r-S8Pc2HQ=w477-h486-s-no-gm?authuser=0');"><div class="zoom-container"><a href="#"></a><span class="rectangle-name">DRINKS MENU</span></div></div>
        </div>
        
        <section class="section-background">
            <div class="title-container">
                <hr class="line" />
                <h2 class="second-title">ORIGINS AND INSPIRATIONS</h2>
                <hr class="line" />
            </div>
            <div class="content-container">
            <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- Asegúrate de que cada imagen esté dentro de un div con clase "swiper-slide" -->
                <div class="swiper-slide">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV847llyx4hoK74zwVxH3od7J-RqAeN0Jy3XLKFYu9ZxIcn1WPtjVUD7ROJFeXP9rP93HAuasrklfzex_JMBNbTZGqckyGjv9ZVmThPS-gYmwSNqze0M93KWG4Kjpm4_h95LixfYahKCczu2LafZAnGTWPvx7ypjT-9Z8gp5ie7GDpirm1oySRW0EdSFT97QhizbJ1EU3spSdD8N0J_ljIztxxazQqGgR2kI7afhaGw5ltsKjlI297LpVa3IQnyGbulXO-a0n68Ca6N_73mYaaZP80MRl0EuAakxG0zoyhECw27oGAe8d-FLbJsCPLoZpbp0GPdq95CCJmAJMqbv7Xks-t4A_WurR6z_vghtHhqSrR0RpyErUhwyqDX8EH8cXMDRLDfYyFlPBIPrtgC9mvENWAxfdUazC7ZGLxN0hXs7H8R_vy3DpGF2ynPwDRSKPJ-39bUhZxJKj00a0ZKXN79qz3GEjW_wgASWQBdwMX8Rn2KuqkctjrF-An40qN7jMfxor6mS7X5-7lBW0cbmOLMhw9ywGb_2QJ-8nM-MkfWO5ZWMWIlVXX9M244rMYfRDHiZoxH4bMo3SAqI9n0jPkyZsWcO1vJKGi8GqZ1HlaMU8HhOh__IGS0p9FmZ5OYP8OkospMdzLVhY2k9Ai0cxH3NpuBtoprKbkWC0Sdy_sM-NgeLtnP6JIRc9IinNhdpX_X4ATyzZRkJGRK2nZ6fGi5Ku5VJTCtUo7ewonfA4tWCHtuenguZadoMQOcihtYjqGy7XG7II7LpaGrAOqzOHnLDhRLjU-38qqezETveZ2ziwX2DKpBeB0rnwMeAZGwPd4FSmJQlO_HeEhTUn9pI4rFNjU-lceSJVR98AowERkEeoNlkp3sp1WGyCgnJVWfakXxXxL1z2sbLaXdS7uKuCTxWjSQ=w492-h486-s-no-gm?authuser=0" alt="Descripción de la imagen 1">
                </div>
                <div class="swiper-slide">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV85e2cANV0L91Las5tJspAjvD5Z7-zmP9lsdMWyAisB0u-RGmGY5Ur9_igjowDFH_uOLaiFdhptZyMSlrTmAu4vgMSMKF1md5zv1KNDCSyyeIe6UMyXiMTEuwYioSKYMfdhkKR17AyqInhgGHJPbJZgSZFPj0rLDZLZ7xOqEq4yd-xkLQR1dub2cYrMCJDHPj-COB6y6dhMCuh8gKWaZ5HsjqWJoaGdjoBf4tX254Mper2qOHTD-cfh1GRgil3YuJjHVEfyJpBOG1Xx8i0qV2ClYh2YIq7WRQP1vyKUMtrLxp-nJllTFxGGFPXNRmSyC9oD1kUfbUWtP61CQkpzo7kbXwy5R8FteGtVCOjo5rV52buL8dNXimQnJAwd1TrZ5k-iE58KXo5hGhhKmiPPSvv6zANEcIPNO4uZTptvfDZwjbVeJN_Q8XgDqxMGsR825_IooHgM8mAa5ZwXOV9UMn53XYE_wkgGBwJq59hAjRCe5_3_ixosM1B9nR1FKGAeHuxaz3w7nS2HkZhdj4TMqZ-bY6XsUHJtAeNULGgfKFe5evmo8a0aDkwF7MO1pqOJ5-UkZqvTIVkyQ_h5Ua2BU0rypG-p2JQxyfgqfAJi0k4THK4iSsoGmpR8_RIAZRvBvp203vNBRwO56FAb03maxt8q-a0K3L5GDq2UlHoHpDlUKyFcypy0CkFpnccp5eqmtqsab8U6xD9MA3gS-RrXE2ARpp0futrjSn4iRqht8ZfHjSMob_YPZ2RRdaJz638yWfJQQtC6XFVZiiBBza_Jvy8kHbmQft1EnvBmaZjWj4-vSvq9QcPxp1IEt0sIRnZp9GtKiVRa5Wu1mre9a7UWkksxeULcA3uqtdgWC8SGlDGNy3L3JbQBhs1c2agxxgM7R9JbYNa6BcCTIt89AD5QJkzQt3w=w315-h486-s-no-gm?authuser=0" alt="Descripción de la imagen 2">
                </div>
                <div class="swiper-slide">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV87LG_k8x9TK3jCV2Cs8VW4si-OCaWfZ8SgZoZKbY4h2vp6q56wFomu_Q73ipv2Vj1TIWyrV51f0usJ3BoDy_MHwI4qiDOORD2DNuZ8aGl4Mt_46ZSFZRzF_GjCxELiAk6w0WUuKeCYGeJoAMe2zBktJMJewPK37foXllECJmKtt4R4zvVgAnqLR91a2p6T72SJrXFxe52hOGgfAJluloU5fuX0NTvQ2J0pwuZGjELaoPO7Qm15_-5Gle9n-ptA9jMVUZ10qv2gGygcf8kzUljsKiDqhkaqE_NdxjJE1h6zWSYHiCVjX-oIUR4bJLXmabAqbzkKuZNScx6NCsw6iM9lOFcVMmLB-UIPZMtdiYuHU-mF_qEh_Tqtz-HHI2Vlryx8_hH-WQeRur7TFV849wjw0-gHRNg6HDmI_W2Mfus_FrWQlCUD2y3K72Fd5v4PSHlMR0xgrcG-M2IHxrXxKlfsX6nQU50rPxFxbqLvHYCCTGnV0HYGVWJtI5pkKdm1BnOBUxQnlCrIoOExIgGJmMCS4YZp-RW1k4AlOKEYMTZrsruVA-NXf1s2a9ksdoQDAmPqm0NPWAtI6nnKCABpFtWEwytJW1c4cNCePVF4gdxdo3rJ7B182ZhZgvQA7hfDgW2gZvkpyON8XH5TRepiv-_JdCtRtiSmCIC8O8rb95Zf1A51huACgWszNZ1bU6SGzl-HfVz0kHYnijizUK5bfGNdg8WJJxZBAJIrVIcGggqvoy_4cDZU8glLCC7fLiFXVAC-s4emATQrxFySr5YIBEOp27QB3mlsXTgkmhNzLuMlBXuqF9W1fJd3xuynJJ-iNzuFscEmHK4Sh1DbVyGjIwoRSubuDGl3V9__FseqAX2TaSK3ufvkMRbeg7AfhWR2CZlrkaI1Y9pozCEy8hSOIpeDdkg=w297-h447-s-no-gm?authuser=0" alt="Descripción de la imagen 2">
                </div>
                <!-- Repite para cada imagen que quieras en el carrusel -->
            </div>
            <!-- Flechas de navegación -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
                <div class="description">
                    <p>Estamos orgullosos de brindar un servicio excepcional, garantizando que todas sus necesidades sean satisfechas con una sonrisa. Nuestro dedicado personal está aquí para guiarlo a través de nuestro menú, recomendarle combinaciones y hacer que su experiencia gastronómica sea realmente excepcional.</p>
                </div>
            </div>
        </section>
    
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

document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

