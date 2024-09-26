document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var dropdownInstances = M.Dropdown.init(elems, { hover: false });

    
    dropdownInstances.forEach(function (dropdownInstance) {
        if (dropdownInstance) {
            dropdownInstance.el.addEventListener('click', function () {
                console.log('Dropdown clickeado');
                
                // Ajustar el dropdown cada vez que se haga clic
                setTimeout(function() {
                    var dropdown = dropdownInstance.el.nextElementSibling; // Obtiene el dropdown correspondiente
                    if (dropdown) {
                        dropdown.style.top = '70px'; // Mover el dropdown a 50px desde la parte superior
                        console.log('Dropdown abierto, ajustando posición');
                    } else {
                        console.error('Dropdown no encontrado');
                    }
                }, 0); // Usar un timeout para permitir que se abra antes de ajustar la posición
            });
        } else {
            console.error('Instancia de dropdown no válida');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

const sidenavLinks = document.querySelectorAll('.sidenav a'); // Seleccionamos todos los enlaces dentro del sidenav
const closeDelay = 300; // Retardo en milisegundos

// Función para cerrar el sidenav con retardo
const closeSidenav = () => {
    const sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
    setTimeout(() => {
        sidenavInstance.close();
    }, closeDelay); // Se cierra después del retardo
};

// Agregamos un evento de clic a cada enlace
sidenavLinks.forEach(link => {
    link.addEventListener('click', closeSidenav);
});

// Función para cerrar el sidenav al hacer clic fuera de él
const closeSidenavOnClickOutside = (event) => {
    const sidenav = document.querySelector('.sidenav');
    if (!sidenav.contains(event.target) && sidenav.classList.contains('open')) {
        closeSidenav();
    }
};

// Agregar evento de clic al documento
document.addEventListener('click', closeSidenavOnClickOutside);
