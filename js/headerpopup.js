        /*document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, { hover: false });  // Menú desplegable se activa al hacer clic
            M.AutoInit();
        });*/
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, { hover: false });
            M.AutoInit();
        
            elems.forEach(function (elem) {
                var dropdownId = elem.getAttribute('data-target');
                var dropdown = document.getElementById(dropdownId);
                var isOpen = false; // Flag para verificar si el dropdown está abierto
        
                elem.addEventListener('click', function () {
                    // Si el dropdown ya está abierto, restablecer el margen y marcar como cerrado
                    if (isOpen) {
                        dropdown.style.marginTop = '0px'; // Restablecer margen al cerrar
                        isOpen = false; // Marcar como cerrado
                        console.log('Dropdown cerrado, margen restablecido a 0px'); // Mensaje de depuración
                    } else {
                        dropdown.style.marginTop = '50px'; // Desplazar 50px hacia abajo al abrir
                        isOpen = true; // Marcar como abierto
                        console.log('Dropdown abierto, margen ajustado a 50px'); // Mensaje de depuración
                    }
                });
        
                // Agregar un evento para restablecer el margen cuando el dropdown se cierre
                document.addEventListener('click', function (event) {
                    if (!elem.contains(event.target) && !dropdown.contains(event.target)) {
                        console.log('Clic fuera del dropdown, restableciendo margen a 0px'); // Mensaje de depuración
                        dropdown.style.marginTop = '0px'; // Restablecer el margen al cerrar
                        isOpen = false; // Marcar como cerrado
                    } else {
                        console.log('Clic dentro del dropdown o del trigger'); // Mensaje de depuración
                    }
                });
        
                // Verificar si se hizo clic en alguna opción del dropdown
                var dropdownOptions = dropdown.querySelectorAll('li a');
                dropdownOptions.forEach(function (option) {
                    option.addEventListener('click', function () {
                        dropdown.style.marginTop = '0px'; // Restablecer el margen al seleccionar una opción
                        isOpen = false; // Marcar como cerrado
                        console.log('Opción seleccionada, restableciendo margen a 0px'); // Mensaje de depuración
                    });
                });
            });
        });