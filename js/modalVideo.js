let imagenProyecto = document.getElementsByClassName('imagen-proyecto');
let proyectos = document.getElementById('proyectos');
let contenedorModal = document.getElementById('contenedor-modal');
let btnCerrar = document.getElementById('btnCerrar');

function desplegarModal() {
    let rutaVideo = this.getAttribute('data-video-src'); // Supongamos que guardas la ruta del video en un atributo data-*
    
    // Crear elementos en lugar de manipular innerHTML
    let modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');
    
    let video = document.createElement('video');
    video.src = rutaVideo;
    video.controls = true; // Agregar controles de reproducción
    video.autoplay = true; // Opcional: Iniciar la reproducción automáticamente
    video.setAttribute('preload', 'auto'); // Opcional: Precargar el video
    
    let btnCerrarModal = document.createElement('div');
    btnCerrarModal.classList.add('btn-cerrar');
    btnCerrarModal.id = 'btnCerrar';

    let iconoCerrar = document.createElement('i');
    iconoCerrar.classList.add('fa', 'fa-times');
    iconoCerrar.setAttribute('aria-hidden', 'true');

    btnCerrarModal.appendChild(iconoCerrar);

    btnCerrarModal.addEventListener('click', cerrarModal);
    
    modal.appendChild(video);
    modal.appendChild(btnCerrarModal);
    contenedorModal.appendChild(modal);
}

for (let i = 0; i < imagenProyecto.length; i++) {
    imagenProyecto[i].addEventListener('click', desplegarModal);
}

// Si el usuario hace click en la X
function cerrarModal() {
    let modal = document.getElementById('modal');
    modal.remove();
}

// Si el usuario presiona la tecla escape
window.addEventListener("keydown", function (event) {
    let modal = document.getElementById('modal');
    if (event.key === 'Escape' && modal) {
        modal.remove();
    }
});
