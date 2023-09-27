
var limiteInferior = 1;
var limiteSuperior = 100;
var ran = Math.round(Math.random() * (limiteSuperior - limiteInferior));

function acierto(n) {
    if (n == ran) {
        document.write("El numero que has es el correcto ");
    } else {
        if (n < ran) {
            document.write("El numero que has introducido es menor");
        } else {
            document.write("El numero que has introducido es mayor");
        }
    }




    document.write(ran);
}

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function acierto2(n) {
    do {
        intentos++;
        if (n < 1 || n > 100) {
            alert("Por favor, introduce un número válido entre 1 y 100.");
        } else {
            if (n == numeroAleatorio) {
                document.write(`¡Felicidades, has adivinado el número ${numeroAleatorio} en ${intentos} intentos!`);
            } else if (intentos >= 10) {

            }
        }


        } while (intentos == 10);

    }