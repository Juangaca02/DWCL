// Contadores para cada función
var contadorTodos = 0;
var contadorPrimero = 0;
var contadorPares = 0;
var contadorImpares = 0;
var contadorAñadir = 0;

// Obtener la colección de párrafos
var parrafos = document.querySelectorAll('p');

// Función para cambiar todos los párrafos a color rojo y aumentar el contador
function cambiarTodos() {
    contadorTodos++;
    actualizarContadores();
    parrafos.forEach(function (parrafo) {
        parrafo.style.color = 'red';
    });
}

// Función para cambiar el color del primer párrafo a rojo y aumentar el contador
function cambiarPrimero() {
    contadorPrimero++;
    actualizarContadores();
    parrafos[0].style.color = 'red';
}

// Función para cambiar el color de los párrafos pares a rojo y aumentar el contador
function cambiarPares() {
    contadorPares++;
    actualizarContadores();
    for (var i = 0; i < parrafos.length; i += 2) {
        parrafos[i].style.color = 'red';
    }
}

// Función para cambiar el color de los párrafos impares a rojo y aumentar el contador
function cambiarImpares() {
    contadorImpares++;
    actualizarContadores();
    for (var i = 1; i < parrafos.length; i += 2) {
        parrafos[i].style.color = 'red';
    }
}

// Función para añadir un nuevo párrafo al final, aumentar el contador y mostrar el contador actualizado
function añadirAlFinal() {
    contadorAñadir++;
    actualizarContadores();
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Nuevo párrafo';
    document.querySelector('div').appendChild(nuevoParrafo);
}

// Función para restaurar el estado original y reiniciar los contadores
function estadoOriginal() {
    contadorTodos = contadorPrimero = contadorPares = contadorImpares = contadorAñadir = 0;
    actualizarContadores();
    parrafos.forEach(function (parrafo) {
        parrafo.style.color = '';
    });
}

// Función para actualizar los contadores en la interfaz
function actualizarContadores() {
    document.getElementById('contadorTodos').textContent = contadorTodos;
    document.getElementById('contadorPrimero').textContent = contadorPrimero;
    document.getElementById('contadorPares').textContent = contadorPares;
    document.getElementById('contadorImpares').textContent = contadorImpares;
    document.getElementById('contadorAñadir').textContent = contadorAñadir;
}
