const random = Math.round(Math.random() * 100)
const comprobar = number =>{
    if (number == random) {
        alert("El numero es el correcto")
    } else {
        if (number < random) {
            alert("El número es menor que el deseado")
        } else {
            alert("El número es mayor que el deseado")
        }
    }
    console.log(random)
}