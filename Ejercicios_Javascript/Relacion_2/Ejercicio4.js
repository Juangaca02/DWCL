
var array = [6, "pepe", 2, "juanan"];
let max = 0
let mayor
let suma = 0
array.forEach((valor) => {
    if ((typeof (valor) === 'string') && valor.length > max) {
        max = valor.length
        mayor = valor
    }
})
document.write(`El texto mayor es: ${mayor}`)

array.forEach((num) => {
    if ((typeof (num) === 'number')) {
        suma += num
    }
})
document.write(`<br>La suma es: ${suma}`)