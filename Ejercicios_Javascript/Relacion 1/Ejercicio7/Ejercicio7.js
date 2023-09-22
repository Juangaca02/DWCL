function mostrarPar(n) {
    if (n % 2 != 0) {
        document.write("El numero no es par");
    }
    else {
        document.write("El numero es par <br>");
        if (n < 10) {
            document.write("Numero incorrecto");
        }
        else {
            document.write("Numero correcto");
        }
    }

}
