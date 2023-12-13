let n1 = 1
let n2 = 5
let n3 = -5

const numeroMenor = (n1, n2, n3) =>{
    return Math.min(n1, n2, n3)
}

document.write(`El menor de los numeros: ${n1}, ${n2}, ${n3}. Es => ${numeroMenor(n1, n2, n3)}`)