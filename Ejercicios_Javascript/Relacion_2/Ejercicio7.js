const str = `papa`

const comprobarMayus = str => {
    return str === str.toUpperCase()
}

const comprobarMinus = str => {
    return str === str.toLowerCase()
}

const comprobacion = str => {
    if (comprobarMayus(str)) {
        document.write(`La frase: ${str}, solo contiene mayusculas`)
    } if (comprobarMinus(str)) {
        document.write(`La frase: ${str}, solo contiene minusculas`)
    } else {
        document.write(`La frase: ${str}, contiene tanto mayusculas como minusculas`)
    }
}

comprobacion(str)

