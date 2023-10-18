
let num = 0;
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
do {
    num = parseInt(prompt(`Dame un numero de 8 cifras`))
} while (!/^\d{8}$/.test(num))

const numLetra = num => {
    let a = num % 23
    return letras[a]
}
alert(`El DNI es: ${num} ${numLetra(num)}`)

const numero2 = prompt(`Introduce un DNI`) 

let soloNumeros = numero2.slice(0, -1)

let soloLetra = numero2.slice(soloNumeros.length)

const comprobarLetra = () =>{
    alert(soloLetra == numLetra(soloNumeros) ? `La letra es correcta` : `La letra es incorrecta`)
}

comprobarLetra()