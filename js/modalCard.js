let imagenProyecto = document.getElementsByClassName('imagen-proyecto');
let proyectos = document.getElementById('proyectos');
let contenedorModal = document.getElementById('contenedor-modal');
let btnCerrar = document.getElementById('btnCerrar');

function desplegarModal() {
    let rutaImagen = this.getAttribute('src');
    let tituloProyecto = this.getAttribute('data-titulo');
    let descripcionProyecto = this.getAttribute('data-descripcion');
    
    // Crear elementos en lugar de manipular innerHTML
    let modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');
    
    let card = document.createElement('div');
    card.classList.add('card');
    
    let img = document.createElement('img');
    img.src = rutaImagen;
    img.alt = '';
    
    let info = document.createElement('div');
    info.classList.add('info');
    
    let titulo = document.createElement('h3');
    titulo.textContent = tituloProyecto;
    titulo.classList.add('tituloProyecto');
    
    let descripcion = document.createElement('p');
    descripcion.textContent = descripcionProyecto;
    descripcion.classList.add = ('descripcionProyecto')
    
    let btnCerrarModal = document.createElement('div');
    btnCerrarModal.classList.add('btn-cerrar');
    btnCerrarModal.id = 'btnCerrar';

    let iconoCerrar = document.createElement('i');
    iconoCerrar.classList.add('fa', 'fa-times');
    iconoCerrar.setAttribute('aria-hidden', 'true');

    btnCerrarModal.appendChild(iconoCerrar);

    btnCerrarModal.addEventListener('click', cerrarModal);
    
    info.appendChild(titulo);
    info.appendChild(descripcion);
    card.appendChild(img);
    card.appendChild(info);
    modal.appendChild(card);
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
