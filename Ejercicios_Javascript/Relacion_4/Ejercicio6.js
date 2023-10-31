const comprobar = () => {
    var texto = document.getElementById('textoInput').value
    let vocales = 0
    let consonantes = 0
    texto = texto.toLowerCase().split("")
    const vocal = /[aeiouáéíóú]/;// Expresion para comprobar que sea una lerta y no otro caracter
    for (let i = 0; i < texto.length; i++) {
        if (vocal.test(texto[i])) {//Con test, compribarmos si el caracter es una letra o no
            vocales++
        } else if (texto[i] >= 'a' && texto[i] <= 'z') {
            consonantes++;
        }

    }
    document.getElementById("resultado").textContent = `Hay ${vocales} vocales y ${consonantes} consonantes: `

}
