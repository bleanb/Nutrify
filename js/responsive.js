

document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos la imagen por su ID
    const image = document.getElementById('img-panel1');
    const image2 = document.getElementById('img-panel2');
    const image3 = document.getElementById('img-panel3');

    // Creamos una función que cambie la imagen según el tamaño de la pantalla
    function changeImage() {
        // Verificamos si la pantalla es menor o igual a 1024px de ancho
        if (window.matchMedia('(max-width: 1024px)').matches) {
            // Si es menor o igual, cambiamos la imagen a la versión móvil
            image.src = './assets/img/panelphone1.webp';
            image2.src = './assets/img/panelphone2.png';
            image3.src = './assets/img/panelphone3.png';
        } else {
            // Si es mayor, volvemos a la imagen original
            image.src = './assets/img/panel1.png';
            image2.src = './assets/img/panel2.png';
            image3.src = './assets/img/panel3.png';
        }
    
        // Manejo de errores al cargar imágenes
        [image, image2, image3].forEach(img => {
            img.onerror = () => {
                console.error(`Error al cargar la imagen: ${img.src}`);
            };
        });
    }
    

    // Ejecutamos la función al cargar la página
    changeImage();

    // Escuchamos los cambios de tamaño de pantalla para cambiar la imagen dinámicamente
    window.addEventListener('resize', changeImage);
});


