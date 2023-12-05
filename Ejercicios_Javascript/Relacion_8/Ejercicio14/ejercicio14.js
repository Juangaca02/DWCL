function analizarTexto() {
    var texto = document.getElementById('texto').value;

    // Contar el número de palabras
    var palabras = texto.split(/\s+/);
    var numPalabras = palabras.length;

    // Obtener la primera y última palabra
    var primeraPalabra = palabras[0];
    var ultimaPalabra = palabras[numPalabras - 1];

    // Mostrar todas las palabras al revés
    var palabrasAlReves = palabras.map(function (palabra) {
        return palabra.split('').reverse().join('');
    });

    // Mostrar todas las palabras ordenadas alfabéticamente y en orden inverso
    var palabrasOrdenadas = palabras.slice().sort();
    var palabrasOrdenadasInverso = palabrasOrdenadas.slice().reverse();

    // Mostrar los resultados en una ventana de alerta
    var resultado = "Número de palabras: " + numPalabras +
        "<br>Primera palabra: " + primeraPalabra +
        "<br>Última palabra: " + ultimaPalabra +
        "<br>Palabras al revés: " + palabrasAlReves.join(' ') +
        "<br>Palabras ordenadas alfabéticamente: " + palabrasOrdenadas.join(' ') +
        "<br>Palabras en orden inverso: " + palabrasOrdenadasInverso.join(' ');
    const ventana = globalThis.open('', '', 'width=500,height=500');
    ventana.document.write(resultado);
}