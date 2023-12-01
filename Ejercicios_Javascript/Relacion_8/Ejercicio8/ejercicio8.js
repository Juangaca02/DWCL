// Función para cambiar el color de fondo al pasar el ratón
function cambiarColorFondo(elemento) {
    document.body.style.backgroundColor = elemento.style.backgroundColor;
}

// Función para restaurar el color de fondo al quitar el ratón
function restaurarColorFondo() {
    document.body.style.backgroundColor = '#e0e0e0';
}