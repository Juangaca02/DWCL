var indiceParrafo = 0;

function mostrarParrafo() {
    var contenedor = document.getElementById('contenedor');
    var parrafos = contenedor.getElementsByTagName('p');

    if (indiceParrafo < parrafos.length) {
        parrafos[indiceParrafo].style.display = 'block';
        indiceParrafo++;
    }
}