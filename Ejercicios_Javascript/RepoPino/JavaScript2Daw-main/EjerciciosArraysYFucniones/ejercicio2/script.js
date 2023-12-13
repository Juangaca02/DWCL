let numeros = []

const pedir10Numeros = () => {
  for (let index = 0; index < 10; index++){
   numeros[index] = parseFloat(prompt(`Dame un numero`))
  }
}

let suma = 0

const sumar = () =>{
  numeros.forEach(num =>{
    document.write(`${num}<br>`)
    suma += num
  })
}

pedir10Numeros()
sumar()


document.write(`La suma es ${suma}`)