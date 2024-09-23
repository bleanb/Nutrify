document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-panel > div');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 10000); // Cambiar cada 5 segundos (5000 milisegundos)
});
