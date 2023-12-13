const random = Math.round(Math.random() * 100)
let cont = 1
let inf = 0
let sup = 100
let number = -500
const comprobar = () => {
    do {
        number = parseInt(prompt(`Introduce un número del ${inf} al ${sup}`))
        if (number < 0 || number > 100) {
            alert(`El número ${number} no está entre los límites`)
        } else {
            if (number == random) {
                alert(`Enhorabuena has usado ${cont} intentos`)
            } else {
                alert(number < random ? "El número es menor que el deseado" : "El número es mayor que el deseado")
                number < random ? sup = number : inf = number
            }
        }
        cont++
    } while (number != random && cont <= 10);
    console.log(random)
    if (cont >= 10) {
        alert("Has perdido")
    }
}

comprobar()
