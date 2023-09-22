
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
