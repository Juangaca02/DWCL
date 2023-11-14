
const añadirParrafo = document.getElementById("añadirParrafo")
let cont = 0

añadirParrafo.addEventListener("click", () => {
    cont++
    console.log(cont)
    let parrafos = document.querySelectorAll('p')
    const seccion = document.getElementById("texto")
    const parrafo = document.createElement("p")
    parrafo.innerHTML = `Este es el nuevo párrafo numero ${cont}`
    if (parrafos.length > 0) {
        seccion.insertAdjacentElement("beforeend", parrafo)
    } else {
        seccion.insertAdjacentElement("afterbegin", parrafo)
    }
});

const reversa = () => {
    let parrafo = document.querySelectorAll('p')
    const cambiado = Array.from(parrafo).reverse()
    console.log(cambiado)

};
/*

function invertir(cadena) {
    var palabras = cadena.split(" ");// Dividir la cadena en palabras utilizando un espacio en blanco como delimitador
    var palabrasInvertidas = palabras.map(function (palabra) {
        // Invertir el orden de las palabras
        return palabra.split("").reverse().join("");
        // Convertir la palabra en un arreglo de caracteres(.split), invertir el arreglo(.reverse) y unirlo nuevamente en una cadena(.join)
    });
    return palabrasInvertidas.reverse().join(" ");
    //Une las distintas palabras con un espacio entre ellas
}

function invertirTexto() {
    var texto = document.getElementById("textoInput").value;
    //Optiene el valor que tenga como ID "textoInput"
    var resultado = invertir(texto);
    //Al texto optenido, le hace la funcion de invertir
    document.getElementById("resultado").textContent = resultado;
    //Optiene el valor que tenga como ID "resultado" y le pasa el texto invertido
}

const generarArray = (n, max) => {
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max)));
};

const ordenar = (array) => {
    return {
        arrayAscendente: array.slice().sort((a, b) => a - b),
        arrayDescendente: [...array].sort((a, b) => b - a),
    };
};
*/

const pareImpares = () => {
    const numeroMax = document.getElementById('numeroMax').value
    const arrayLong = document.getElementById('arrayLong').value
    const array = generarArray(arrayLong, numeroMax)
    const arrayAsDes = ordenar(array)

    document.write(`El Array generado es: ${array} <br>`)
    document.write(`El Array Ascendente generado es: ${arrayAsDes.arrayAscendente} <br>`)
    document.write(`El Array Descendente generado es: ${arrayAsDes.arrayDescendente} <br>`)
}



