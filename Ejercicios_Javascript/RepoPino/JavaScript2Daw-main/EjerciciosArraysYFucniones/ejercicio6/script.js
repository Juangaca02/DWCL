const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
const numero = prompt(`Introduce un número del dni y te dire la letra`)

const averiguarLetra = num =>{
    let indx = num % 23

    return letras[indx]

}

alert(`La letra del dni es ${averiguarLetra(numero)}`)

const numero2 = prompt(`Introduce un dni con letra`) 

let todosMenosUltimo = numero2.slice(0, -1)

let ultimoCaracter = numero2.slice(todosMenosUltimo.length)

console.log(todosMenosUltimo)

console.log(ultimoCaracter)

const comprobarLetra = () =>{
    if (ultimoCaracter == averiguarLetra(todosMenosUltimo)) {
        alert(`La letra es correcta`)
    }else
        alert(`La letra es incorrecta`)
}

comprobarLetra()

