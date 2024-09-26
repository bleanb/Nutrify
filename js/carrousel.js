document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-panel > .slide');
    let currentSlide = 0;

    // Función para mostrar la diapositiva actual
    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === index);
        });
    }

    // Función para cambiar a la siguiente diapositiva
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambia las imágenes según el tamaño de la pantalla
    function changeImage() {
        const imageSources = [
            {
                id: 'img-panel1',
                mobile: './assets/img/panelphone1.jpg',
                desktop: './assets/img/panel1.webp'
            },
            {
                id: 'img-panel2',
                mobile: './assets/img/panelphone2.jpg',
                desktop: './assets/img/panel2.webp'
            },
            {
                id: 'img-panel3',
                mobile: './assets/img/panelphone3.jpj',
                desktop: './assets/img/panel3.webp'
            }
        ];

        imageSources.forEach(({ id, mobile, desktop }) => {
            const img = document.getElementById(id);
            img.src = window.matchMedia('(max-width: 1024px)').matches ? mobile : desktop;

            img.onerror = () => {
                console.error(`Error al cargar la imagen: ${img.src}`);
            };
        });
    }

    // Ejecutamos funciones iniciales
    showSlide(currentSlide);
    changeImage();

    // Cambia la imagen al redimensionar
    window.addEventListener('resize', changeImage);

    // Cambia de diapositiva cada 10 segundos
    setInterval(nextSlide, 5000);
});