
document.addEventListener('DOMContentLoaded', function () {
    const añadir = document.getElementById("añadir");

    const eliminar = document.getElementById("eliminar");
    const lista = document.getElementById("diariosdeportivos");

    const marcas = ["Nike", "Adidas", "Apple", "Coca-Cola", "Samsung", "Google", "Amazon", "Microsoft"];

    const valores = document.createElement("li");

    añadir.addEventListener("click", () => {
        const hola = lista.length
        console.log(hola)



        if (marcas.length > 0) {
            const nuevaMarca = marcas.shift(); // Obtener y eliminar el primer elemento del array
            valores.textContent = nuevaMarca;
            lista.appendChild(valores);
        } else {
            alert('No hay más marcas para añadir.');
        }

    });

    eliminar.addEventListener("click", () => {
        const itemsCount = lista.getElementsByTagName('li').length;
        if (itemsCount > 0) {
            lista.removeChild(lista.lastElementChild);
        } else {
            alert('La lista está vacía, no se pueden eliminar más elementos.');
        }


    });
});


