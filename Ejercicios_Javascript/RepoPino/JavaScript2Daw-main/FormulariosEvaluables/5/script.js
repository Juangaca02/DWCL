let texto = document.getElementById('texto');
document.getElementById('boton').addEventListener('click', function () {
  cifrar(texto.value);
});

document.addEventListener('keyup', e => {
  if (e.keyCode == 13) {
    cifrar(texto.value);
  }
});

const cifrar = texto => {
  resultadoDiv = document.getElementById('resultado');
  let cifrado = cifrarTexto(texto);
  resultadoDiv.innerHTML = `La cadena ${texto} cifrada es ${cifrado}.`;
};

const cifrarTexto = texto => {
  const desplazamiento = Math.floor(Math.random() * 26);

  return texto
    .split('')
    .map(caracter => {
      let codigo = caracter.charCodeAt(0);

      if (codigo >= 65 && codigo <= 90) {
        codigo = ((codigo - 65 + desplazamiento) % 26) + 65;
      } else if (codigo >= 97 && codigo <= 122) {
        codigo = ((codigo - 97 + desplazamiento) % 26) + 97;
      }

      return String.fromCharCode(codigo);
    })
    .join('');
};
