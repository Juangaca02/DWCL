const random = Math.round(Math.random() * 100)
let cont = 1
const comprobar = number =>{
    if (cont >= 10) {
        alert("Has perdido")
    }
    if (number == random) {
        alert(`El numero es el correcto has tardado ${cont} intentos`)
    } else {
        cont++
        if (number < random) {
            alert("El número es menor que el deseado")
        } else {
            alert("El número es mayor que el deseado")
        }
    }
    console.log(random)
}
