function invertir(cadena) {
    const numeroStr = cadena.toString()
    const numeroInvertido = numeroStr.split('').reverse().join('')
    return numeroInvertido
    // return numeroStr === numeroInvertido
}

function invertirTexto() {
    var texto = document.getElementById("textoInput").value
    var num = texto
    var resultado = invertir(texto)
    if (num === resultado) {
        document.getElementById("resultado").textContent = "Si"
    } else {
        document.getElementById("resultado").textContent = "No"
    }
}
