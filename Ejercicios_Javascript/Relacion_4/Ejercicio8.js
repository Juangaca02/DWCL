const generarArray = (valor) => {
    const array = []

    for (let i = 0; i < valor; i++) {
        array.push(i)
    }
    return array
}

const pareImpares = () => {
    const numeros = document.getElementById('numeros').value
    const array = generarArray(numeros)
    const ArrayPar = [];
    const ArrayImpar = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            ArrayImpar.push(array[i])
        } else {
            ArrayPar.push(array[i])
        }
    }
    document.write(`El Array generado es: ${array} <br>`)
    document.write(`El Array Par generado es: ${ArrayPar} <br>`)
    document.write(`El Array Impar generado es: ${ArrayImpar} <br>`)
}
