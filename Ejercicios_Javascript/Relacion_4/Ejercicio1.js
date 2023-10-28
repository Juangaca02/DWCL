function invertir(cadena) {
    var palabras = cadena.split(" ");// Dividir la cadena en palabras utilizando un espacio en blanco como delimitador
    var palabrasInvertidas = palabras.map(function (palabra) {
        // Invertir el orden de las palabras
        return palabra.split("").reverse().join("");
        // Convertir la palabra en un arreglo de caracteres(.split), invertir el arreglo(.reverse) y unirlo nuevamente en una cadena(.join)
    });
    return palabrasInvertidas.join(" ");
    //Une las distintas palabras con un espacio entre ellas
}

function invertirTexto() {
    var texto = document.getElementById("textoInput").value;
    //Optiene el valor que tenga como ID "textoInput"
    var resultado = invertir(texto);
    //Al texto optenido, le hace la funcion de invertir
    document.getElementById("resultado").textContent = resultado;
    //Optiene el valor que tenga como ID "resultado" y le pasa el texto invertido
}
