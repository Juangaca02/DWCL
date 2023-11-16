
let parrafos = document.querySelectorAll('p')

const cargarParrafos = () => {
    parrafos = document.querySelectorAll("p");
};

const cambiarTodos = () => {
    parrafos.forEach(function (parrafo) {
        parrafo.style.color = 'red';
    });
}

const cambiarPrimero = () => {
    estadoOriginal()
    parrafos[0].style.color = 'red';
}

const cambiarPares = () => {
    for (let i = 0; i < parrafos.length; i += 2) {
        parrafos[i].style.color = 'red';
    }
}

const cambiarImpares = () => {
    for (let i = 1; i < parrafos.length; i += 2) {
        parrafos[i].style.color = 'red';
    }
}

const añadirAlFinal = () => {
    parrafos[1].insertAdjacentHTML("afterend", "<p>Párrafo Nuevo después del párrafo2</p>")
    cargarParrafos()
    /* Otra forma de hacerlo
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent =
    "Este es un nuevo párrafo después del segundo párrafo.";
    parrafos[1].parentNode.insertBefore(nuevoParrafo, parrafos[2]);
    */
}
const estadoOriginal = () => {
    parrafos.forEach(function (parrafo) {
        parrafo.style.color = '';
    });
};