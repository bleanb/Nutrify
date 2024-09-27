const barrios = {
    "Retiro": [
        { direccion: "1241 Esmeralda", lat: -34.591, lng: -58.374 },
        { direccion: "356 Av. del Libertador", lat: -34.588, lng: -58.392 }
    ],
    "San Nicolás": [
        { direccion: "Av. Callao 289", lat: -34.604, lng: -58.391 },
        { direccion: "Av. Corrientes 1355", lat: -34.603, lng: -58.382 },
        { direccion: "Opción 5", lat: -34.602, lng: -58.375 },
        { direccion: "Opción 6", lat: -34.601, lng: -58.369 },
        { direccion: "Opción 7", lat: -34.599, lng: -58.362 }
    ],
    "Puerto Madero": [
        { direccion: "Opcion 8", lat: -34.612, lng: -58.375 },
        { direccion: "Opcion 9", lat: -34.632, lng: -58.375 }
    ],
    "Pasdasdaaaaaaa": [
        { direccion: "Opcion 8", lat: -34.612, lng: -58.375 },
        { direccion: "Opcion 9", lat: -34.632, lng: -58.375 }
    ],
    "Pdddssss": [
        { direccion: "Opcion 8", lat: -34.612, lng: -58.375 },
        { direccion: "Opcion 9", lat: -34.632, lng: -58.375 }
    ],
    "Psdfdsf": [
        { direccion: "Opcion 8", lat: -34.612, lng: -58.375 },
        { direccion: "Opcion 9", lat: -34.632, lng: -58.375 }
    ],
    "Pusafasf": [
        { direccion: "Opcion 8", lat: -34.612, lng: -58.375 },
        { direccion: "Opcion 9", lat: -34.632, lng: -58.375 }
    ],
    "Paeae": [
        { direccion: "Opcion 8", lat: -34.612, lng: -58.375 },
        { direccion: "Opcion 9", lat: -34.632, lng: -58.375 }
    ]
};


let topPosition = 15; // Variable para rastrear la posición superior del menú
let divOpciones; // Variable global para guardar el div de las opciones
let map; // Variable global para el mapa Leaflet
let ubicaciondisponible = false; //Variable global para saber si esta disponible la ubicacion del usaurio
let latUsuario = null; // Variable global para almacenar la latitud del usuario
let lngUsuario = null; // Variable global para almacenar la longitud del usuario
let lat = null;
let lng = null;
let direccionCompleta = null;
let divMenu; // Variable global para guardar el div del menú


function solicitarUbicacionUsuario() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            ubicaciondisponible = true;
            latUsuario = position.coords.latitude;
            lngUsuario = position.coords.longitude;
            inicializarMapa();
        }, function (error) {
            console.error('Error al obtener la ubicación del usuario:', error);
            ubicaciondisponible = false; // Establecer ubicaciondisponible como falso si hay un error al obtener la ubicación
            latUsuario = null; // Establecer latUsuario como null si hay un error al obtener la ubicación
            lngUsuario = null; // Establecer lngUsuario como null si hay un error al obtener la ubicación
        });
    }
}

// Función para inicializar el mapa al inicio
// Función para inicializar el mapa al inicio
function inicializarMapa() {

    const customIcon = L.icon({
        iconUrl: './assets/img/marker.webp',
        iconSize: [80, 80], // Tamaño del icono [ancho, alto]
    });

    if (ubicaciondisponible == true) {
        // Crear el mapa con Leaflet y centrarlo en las coordenadas del usuario
        map.setView([latUsuario, lngUsuario], 13);

        // Añadir un marcador al mapa en las coordenadas del usuario
        L.marker([latUsuario, lngUsuario]).addTo(map)
            .bindPopup("Tu Ubicación")
            .openPopup();
    }

    // Crear el mapa con Leaflet
    map = L.map('mapa').setView([-34.6037, -58.3816], 13); // Latitud, longitud, zoom

    // Agregar la capa de tiles de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Iterar sobre cada barrio en el objeto barrios
    Object.keys(barrios).forEach(barrio => {
        // Iterar sobre cada dirección en el barrio
        barrios[barrio].forEach(direccion => {
            const { lat, lng } = direccion; // Extraer las coordenadas de la dirección

            // Construir la dirección completa con el nombre del barrio
            const direccionCompleta = `${direccion.direccion}, ${barrio}, Buenos Aires, Argentina`;

            // Añadir un marcador al mapa en las coordenadas
            L.marker([lat, lng], { icon: customIcon }).addTo(map)
                .bindPopup(direccionCompleta);
        });
    });

}

// Llamar a la función para inicializar el mapa al inicio
inicializarMapa();




document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkboxubicacion');
    const mostrarTodos = document.getElementById('boton-reset');
    const labelMapa = document.getElementById('label-checkbox');

    mostrarTodos.addEventListener('click', function(){
        // Retirar la clase 'activo' de todos los enlaces del menú
        divMenu.querySelectorAll('a').forEach(a => {
            a.classList.remove('activo');
        });

        // Llamar a la función pintarMapa sin pasar ninguna dirección ni barrio, para deseleccionar el barrio
        pintarMapa(null, null);
        pintarDireccion(null)
        ubicaciondisponible = false; // Establecer ubicaciondisponible como falso si hay un error al obtener la ubicación
        latUsuario = null; // Establecer latUsuario como null si hay un error al obtener la ubicación
        lngUsuario = null; // Establecer lngUsuario como null si hay un error al obtener la ubicación
        if (map) {
            map.remove();
        }
        inicializarMapa();

        // Verificar si el checkbox está marcado
        if (checkbox.checked) {
            solicitarUbicacionUsuario();
        }
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            labelMapa.style.color = 'green';
        }
        else{
            labelMapa.style.color = 'red';
        }
        // Verificar si la ubicación ya está disponible
        if (this.checked && !ubicaciondisponible) {
            solicitarUbicacionUsuario();
        } else {
            ubicaciondisponible = false; // Establecer ubicaciondisponible como falso si hay un error al obtener la ubicación
            latUsuario = null; // Establecer latUsuario como null si hay un error al obtener la ubicación
            lngUsuario = null; // Establecer lngUsuario como null si hay un error al obtener la ubicación
            if (map) {
                map.remove();
            }

            inicializarMapa();

            // Si el checkbox está marcado, pintar solo la ubicación seleccionada
            if (this.checked) {
                pintarMapa(direccionCompleta, null);
            }
            else{
                divMenu.querySelectorAll('a').forEach(a => {
                    a.classList.remove('activo');
                });
                pintarMapa(null, null);
                pintarDireccion(null)
            }
        }
    });
});


function pintarMapa(direccion, barrio) {

    //markador custom para el mapa
    const customIcon = L.icon({
        iconUrl: './assets/img/marker.webp',
        iconSize: [80, 80], // Tamaño del icono [ancho, alto
    });

    

    // Verificar si la dirección y el barrio están definidos
    if (!direccion || !barrio) {
        console.error('La dirección y el barrio son necesarios para pintar el mapa.');
        return;
    }

    // Verificar si el barrio está presente en el vector
    if (!barrios.hasOwnProperty(barrio)) {
        console.error(`El barrio "${barrio}" no está definido en el vector.`);
        return;
    }

    // Buscar la dirección dentro del barrio
    const lugar = barrios[barrio].find(item => item.direccion === direccion);
    if (!lugar) {
        console.error(`La dirección "${direccion}" no está definida en el barrio "${barrio}".`);
        return;
    }

    const lat = lugar.lat;
    const lng = lugar.lng;

    // Construir la dirección completa
    const direccionCompleta = `${direccion}, ${barrio}, Buenos Aires, Argentina`;

    // Si ya hay un mapa, eliminarlo
    if (map) {
        map.remove();
    }

    // Crear el mapa con Leaflet y centrarlo en las coordenadas
    map = L.map('mapa').setView([lat, lng], 12); // Latitud, longitud, zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    // Si la ubicación del usuario está disponible, pintar su ubicación
    if (ubicaciondisponible === true) {

        // Añadir un marcador al mapa en las coordenadas del usuario
        L.marker([latUsuario, lngUsuario]).addTo(map)
            .bindPopup("Tu Ubicación")
            .openPopup();

            const control = L.Routing.control({
                waypoints: [
                    L.latLng(latUsuario, lngUsuario), // Latitud y longitud del punto de inicio
                    L.latLng(lat, lng) // Latitud y longitud del punto de destino
                ],
                routeWhileDragging: true, // Permitir enrutamiento mientras se arrastra
                language: 'es' // Especificar el idioma de las indicaciones
                
            }).addTo(map);
        

    }
    // Añadir un marcador al mapa en las coordenadas con el icono personalizado
    L.marker([lat, lng], { icon: customIcon }).addTo(map)
        .bindPopup(direccionCompleta) // Establecer el contenido del popup
        .openPopup(); // Abrir el popup automáticamente


}



function generarMenu() {
    const menuDiv = document.getElementById("menu");
    divMenu = document.createElement("div"); // Asignar el valor de divMenu aquí
    divMenu.className = "custom-menu-box";

    Object.keys(barrios).forEach(opcion => {
        const opcionLink = document.createElement("a");
        opcionLink.textContent = `${opcion}`;
        opcionLink.style.paddingLeft = "15px";
        opcionLink.style.left = "-100%";
        opcionLink.style.transition = "left 0.5s ease";
        opcionLink.onclick = function () {
            divMenu.querySelectorAll('a').forEach(a => {
                a.classList.remove('activo');
            });
            pintarDireccion(opcion);
            this.classList.add('activo');
        };
        divMenu.appendChild(opcionLink);
        divMenu.appendChild(document.createElement("br")); // Agregar salto de línea entre opciones
    });

    menuDiv.appendChild(divMenu);
}


function pintarDireccion(opcion) {
    const menuDiv = document.getElementById("menu");

    // Si ya existe un div de opciones, eliminarlo
    if (divOpciones) {
        menuDiv.removeChild(divOpciones);
    }

    const divMenu = document.createElement("div");
    divMenu.className = "custom-menu-box";
    divMenu.style.marginTop = `${topPosition}px`; // Establecer el margen superior

    const direcciones = barrios[opcion]; // Obtener las direcciones del barrio seleccionado
    if (direcciones) {
        direcciones.forEach(lugar => {
            const opcionLink = document.createElement("a");

            // Establecer el texto de la opción (dirección) con el icono de ubicación y un espacio
            opcionLink.innerHTML = `&nbsp;&nbsp;<i class="fas fa-map-marker-alt"></i>&nbsp; ${lugar.direccion}`;

            opcionLink.onclick = function () {
                pintarMapa(lugar.direccion, opcion);
                divMenu.querySelectorAll('a').forEach(a => {
                    a.classList.remove('activo');
                });
                this.classList.add('activo');
            };

            divMenu.appendChild(opcionLink);
            divMenu.appendChild(document.createElement("br")); // Agregar salto de línea entre opciones
        });
    }

    // Guardar el nuevo div de opciones en la variable global
    divOpciones = divMenu;
    menuDiv.appendChild(divMenu);
}



window.onload = function () {
    generarMenu();
    window.scrollBy(0, -120);
};
