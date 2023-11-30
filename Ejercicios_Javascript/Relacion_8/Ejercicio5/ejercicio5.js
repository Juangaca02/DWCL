/*>< */
const calculoFactorial = (numero) => {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calculoFactorial(numero - 1);
    }


}

const calcular = () => {
    const mensajeDiv = document.getElementById("mensaje")
    let numero = document.getElementById("numero").value
    const factorial = calculoFactorial(numero)
    mensajeDiv.textContent = `El factorial de ${numero} es: ${factorial}`


}
