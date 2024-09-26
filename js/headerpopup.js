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
