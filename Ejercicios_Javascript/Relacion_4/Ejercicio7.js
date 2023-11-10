const generarArray = () => {
    const numerosAleatorios = [];

    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100);
        numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
}

const mayorYMenor = () => {
    const newArray = []
    newArray.push(Math.max(...array))
    newArray.push(Math.min(...array))
    return newArray
}

const array = generarArray()
const mayorYMenorResult = mayorYMenor()
document.write(`El Array generado es: ${array} <br>`)
document.write(`El numero mayor y menor son: ${mayorYMenorResult.join(' y ')}`)
