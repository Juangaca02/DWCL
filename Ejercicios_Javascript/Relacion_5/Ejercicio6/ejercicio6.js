const añadirParrafo = document.getElementById("añadirParrafo")
const seccion = document.getElementById("texto")
let parrafos = document.querySelectorAll('p')
let cont = 0

const cargarParrafos = () => {
    parrafos = document.querySelectorAll('p');
};

const reversa = () => {
    let parrafo = document.querySelectorAll('p')
    const cambiado = Array.from(parrafo).reverse()
    console.log(cambiado)
    //Elimino los elementos dentro del div
    parrafo.forEach(parrafo => {
        seccion.removeChild(parrafo)
    });
    //Añado los elementos al div, pero ya invertidos
    cambiado.forEach(parrafo => {
        seccion.appendChild(parrafo)
    });
    cargarParrafos();
};

añadirParrafo.addEventListener("click", () => {
    cont++
    console.log(cont)
    cargarParrafos();
    const parrafo = document.createElement("p")
    parrafo.innerHTML = `Este es el nuevo párrafo numero ${cont}`
    if (parrafos.length > 0) {
        seccion.insertAdjacentElement("beforeend", parrafo)
    } else {
        seccion.insertAdjacentElement("afterbegin", parrafo)
    }
});



