const generarArray = (n, max) => {
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max)));
};

const ordenar = (array) => {
    return {
        arrayAscendente: array.slice().sort((a, b) => a - b),
        arrayDescendente: [...array].sort((a, b) => b - a),
    };
};


const pareImpares = () => {
    const numeroMax = document.getElementById('numeroMax').value
    const arrayLong = document.getElementById('arrayLong').value
    const array = generarArray(arrayLong, numeroMax)
    const arrayAsDes = ordenar(array)

    document.write(`El Array generado es: ${array} <br>`)
    document.write(`El Array Ascendente generado es: ${arrayAsDes.arrayAscendente} <br>`)
    document.write(`El Array Descendente generado es: ${arrayAsDes.arrayDescendente} <br>`)
}


