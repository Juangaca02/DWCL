function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    if (nombre && apellido) {
        mensajeBienvenida.innerHTML = '¡Bienvenido, ' + nombre + ' ' + apellido + '!';
        mensajeBienvenida.style.display = 'block';
    }
}

function limpiarFormulario() {
    document.getElementById('formulario').reset();
    document.getElementById('mensajeBienvenida').style.display = 'none';
}