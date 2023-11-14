const boton = document.getElementById("añadir");
const lista = document.getElementById("diariosDeportivos");
const texto = document.getElementById("texto");
const eliminar = document.getElementById("eliminar");

const agregar = () => {
    const nuevoTexto = texto.value.trim();

    if (nuevoTexto !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = nuevoTexto;
        lista.appendChild(nuevoLi);
        texto.value = "";
    }
};

boton.addEventListener("click", () => {
    agregar();
});

texto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") agregar();
});

eliminar.addEventListener("click", () => {
    const itemsCount = lista.getElementsByTagName('li').length;
    if (itemsCount > 0) {
        lista.removeChild(lista.lastElementChild);
    } else {
        alert('La lista está vacía, no se pueden eliminar más elementos.');
    }
});