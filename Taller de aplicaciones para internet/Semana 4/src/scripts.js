// Escucha el evento de carga completa del DOM para iniciar funciones específicas
document.addEventListener('DOMContentLoaded', function() {
    // Muestra la sección de inicio al cargar la página
    mostrarSeccion('inicio');
    // Obtiene y muestra los artículos para la sección de inicio
    obtenerArticulos('inicio');

    // Selecciona todos los links de navegación y les asigna eventos
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita la acción predeterminada del link
            const idObjetivo = e.target.getAttribute('data-target'); // Obtiene el ID de la sección a mostrar
            mostrarSeccion(idObjetivo); // Muestra la sección seleccionada
            // Carga artículos solo si la sección no es 'contacto'
            if (idObjetivo !== 'contacto') {
                obtenerArticulos(idObjetivo);
            }
        });
    });
});

// Functión para mostrar la hora
function showCurrentTime() {
    const horaEnVivo = document.getElementById('hora-en-vivo');
    const dateActual = new Date();
    const horas = dateActual.getHours();
    const minutos = dateActual.getMinutes();
    const segundos = dateActual.getSeconds();
    const hora = `${horas}:${minutos}:${segundos}`;
    horaEnVivo.textContent = hora;
}

// Llama a la función cada 1 segundo para actualizar la hora
setInterval(showCurrentTime, 1000);

// Función para mostrar la sección especificada
function mostrarSeccion(idObjetivo) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.content-section');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    // Muestra solo la sección objetivo
    document.getElementById(idObjetivo).style.display = 'block';
}

// Función para obtener artículos de una sección específica
function obtenerArticulos(seccion) {
    // Realiza una solicitud a la API y pasa la respuesta a actualizarUI
    fetch(`api/index.php?seccion=${seccion}`)
        .then(respuesta => respuesta.json())
        .then(datos => actualizarUI(seccion, datos));
}

// Función para agregar un artículo a una sección determinada
function agregarArticulo(seccion) {
    // Recoge los valores de los campos del formulario
    const tituloElement = document.getElementById(`titulo-articulo-${seccion}`);
    const descripcionElement = document.getElementById(`descripcion-articulo-${seccion}`);
    const titulo = tituloElement.value;
    const descripcion = descripcionElement.value;

    // Verifica que los campos no estén vacíos
    if (!titulo.trim() || !descripcion.trim()) {
        mostrarNotificacion('Por favor, completa todos los campos antes de enviar.');
        if (!titulo.trim()) {
          descripcion.focus();
        } else {
          titulo.focus();
        }
        return;
    }

    // Crea y envía el artículo a la API
    const articulo = {
        titulo: titulo,
        descripcion: descripcion
    };

    fetch(`api/index.php?seccion=${seccion}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articulo)
    })
    .then(response => response.json())
    .then(data => {
        if (data.exito) {
            mostrarNotificacion('Artículo agregado exitosamente!');
            tituloElement.value = '';
            descripcionElement.value = '';
            obtenerArticulos(seccion);
        } else {
            mostrarNotificacion('Error al agregar el artículo: ' + data.mensaje);
        }
    })
    .catch(error => {
        console.error('Error al enviar el artículo:', error);
        mostrarNotificacion('Error al enviar el artículo.');
    });
}

// Función para mostrar una notificación en la página
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.classList.add('notificacion', 'animated', 'bounceIn');
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.classList.add('show');
    }, 100);

    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Actualiza la interfaz de usuario mostrando los artículos recibidos
function actualizarUI(seccion, articulos) {
    const grilla = document.getElementById(`news-grid-${seccion}`);
    grilla.innerHTML = '';
    articulos.forEach(articulo => {
        const elementoArticulo = document.createElement('article');
        elementoArticulo.innerHTML = `<h3>${articulo.titulo}</h3><p>${articulo.descripcion}</p>`;
        grilla.appendChild(elementoArticulo);
    });
}

// Función para enviar un correo electrónico a través de un formulario
function enviarCorreo(evento) {
    evento.preventDefault();
    const nombre = document.getElementById('nombre-contacto').value;
    const mensaje = document.getElementById('mensaje-contacto').value;

    fetch('api/sendEmail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `nombre=${encodeURIComponent(nombre)}&mensaje=${encodeURIComponent(mensaje)}`
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        mostrarNotificacion(datos.mensaje);
    })
    .catch(error => console.error('Error al enviar correo:', error));
}
