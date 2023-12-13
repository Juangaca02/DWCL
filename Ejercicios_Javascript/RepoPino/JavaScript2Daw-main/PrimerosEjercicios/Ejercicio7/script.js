const comprobar = number =>{
    if (number % 2 == 0) {
       if (number > 10) {
        alert(`El número ${number} Es correcto`)
       } else {
        alert(`El número ${number} Es incorrecto`)
       }
    } else {
        alert(`El número ${number} Es incorrecto`)
    }
}