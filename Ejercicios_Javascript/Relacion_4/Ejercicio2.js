// Definición de la función contarVecesCadenaEnTexto que cuenta las ocurrencias de una subcadena en un texto.
const contarVecesCadenaEnTexto = (subcadena, texto) => {
    let contador = 0;
    let posicion = texto.indexOf(subcadena);  // Busca la primera posición de la subcadena en el texto.

    // Mientras se encuentren más ocurrencias de la subcadena en el texto.
    while (posicion !== -1) {
        contador++;  // Incrementa el contador cada vez que se encuentra una ocurrencia.
        posicion = texto.indexOf(subcadena, posicion + 1);  // Busca la siguiente ocurrencia a partir de la posición anterior.
    }
    return contador;  // Devuelve el contador con el número total de ocurrencias.
};

const contarSubcadena = () => {
    const texto = document.getElementById("textoInput").value;
    const subcadena = document.getElementById("subcadenaInput").value;
    const resultado = contarVecesCadenaEnTexto(subcadena, texto);
    document.getElementById("resultado").innerText = `La subcadena "${subcadena}" se repite ${resultado} veces en el texto.`;
};
