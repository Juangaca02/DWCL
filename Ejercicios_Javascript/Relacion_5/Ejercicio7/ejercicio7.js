const palabras = ['manzana', 'naranja', 'pera', '1', 'fresa', 'kiwi', 'piña', '50', 'sandía', '%'];
const cambiarLista = document.getElementById("cambiar")
const texto = document.getElementById("texto")
let array;

const cargarLista = () => {
    let lista = document.getElementById('lista');
    array = Array.from(lista.querySelectorAll('li'));
};

const imprimirLista = () => {
    ul = `<ul id="lista">`;
    palabras.forEach(value => {
        ul += `<li>${value}</li>`;
    });
    ul += `</ul>`;
    texto.innerHTML = ul;
    cargarLista();
};

cambiarLista.addEventListener('click', () => {
    cargarLista();
    array.sort((a, b) => a.textContent.localeCompare(b.textContent));

    array.forEach(palabra => {
        lista.removeChild(palabra);
    });
    array.forEach(palabra => {
        lista.appendChild(palabra);
    });
});;