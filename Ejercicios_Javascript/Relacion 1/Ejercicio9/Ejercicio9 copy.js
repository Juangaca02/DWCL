const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function acierto(n) {
    intentos++;

    if (isNaN(n) || n < 1 || n > 100) {
        alert("Por favor, introduce un número válido entre 1 y 100.");
    } else {
        if (n == numeroAleatorio) {
            document.write(`¡Felicidades, has adivinado el número ${numeroAleatorio} en ${intentos} intentos!`);
        } else if (intentos >= 10) {
            document.getElementById("output").innerHTML = `¡HAS PERDIDO! El número correcto era ${numeroAleatorio}.`;
        } else {
            const mensaje = n < numeroAleatorio ? "El número que estás buscando es mayor." : "El número que estás buscando es menor.";
            document.getElementById("output").innerHTML = `${mensaje} Llevas ${intentos} intentos.`;
            comprobarNumero();
        }
    }
}