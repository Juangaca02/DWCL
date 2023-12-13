const number = document.getElementById("number")

const comprobar = () =>{
    if (number.value >=2 && number.value <= 9) {
        for (let index = 1; index <= 10; index++) {
            document.write(`${number.value} X ${index} = ${(number.value * index)}<br>`)
        }
    } else {
        alert(`El número ${number.value} no está entre los limite de 2 y 9`)
    }
}