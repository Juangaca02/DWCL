function analizarTexto() {
  const textoInput = document.getElementById('texto').value.trim();

  if (textoInput !== '') {
    const palabras = textoInput.split(/\s+/);

    const palabrasAlReves = palabras
      .map(palabra => palabra.split('').reverse().join(''))
      .join(' ');
    const ventana = globalThis.open('', '', 'width=500,height=500');
    ventana.document.write(
      `Número de palabras: ${
        palabras.length
      }<br>Primera palabra: ${palabras.shift()}<br>Última palabra: ${palabras.pop()}<br>Palabras al revés:<br>${palabrasAlReves}`
    );
  } else {
    alert('Introduce un texto para analizar.');
  }
}

document.addEventListener('click', e => {
  if (e.target.matches('#analizar')) analizarTexto();
});
