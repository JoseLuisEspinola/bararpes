const imagen = document.getElementById('imagenFondo');
const imagenes = [
    '/img/carrusel1.jpg',
    '/img/carrusel2.jpg',
    '/img/carrusel3.jpg',
    '/img/carrusel4.jpg',
    '/img/carrusel5.jpg',
    '/img/carrusel6.jpg'
    ];
let index = 0;

function cambiarImagen() {
    imagen.style.opacity = 0;
    setTimeout(() => {
        imagen.src = imagenes[index];
        imagen.style.opacity = 1;
        index = (index + 1) % imagenes.length;
    }, 500); // fade suave
}

cambiarImagen(); // carga la primera imagen
setInterval(cambiarImagen, 8000); // cambia cada 8 segundos