const array = [6, "pepe", 2, "juan",2]

const numeros = array.filter(elemento => typeof elemento === 'number')
const textos = array.filter(elemento => typeof elemento === 'string')

const compararTexto = () =>{
  let textoMayor = textos[0]
  textos.forEach(texto =>{
    if (texto.length > textoMayor.length) {
      textoMayor = texto
    }
  })
  return textoMayor
}

const textoMayor = compararTexto()


const multiplicacion = numeros.reduce((total, numero) => total * numero, 1)
const suma = numeros.reduce((total, numero) => total + numero, 0)

const restar = () =>{
  let resta = numeros[0]
  numeros.forEach((numero, indx) =>{
    if (indx != 0) {
      resta - numero
    }
  })
  return resta
}

const resta = restar()

const dividir = () =>{
  let div = numeros[0]
  numeros.forEach((numero, indx) =>{
    if (indx != 0) {
      div / numero
    }
  })
  return div
}

const division = dividir()

document.write(`En el array el texto mas largo es ${textoMayor}<br>`)
document.write(`La suma de los números del array es ${suma}<br>`)
document.write(`La multiplicación de los números del array es ${multiplicacion}<br>`)
document.write(`La resta de los números del array es ${resta}<br>`)
document.write(`La división de los números del array es ${division}<br>`)

