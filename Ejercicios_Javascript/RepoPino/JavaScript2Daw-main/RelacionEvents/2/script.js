const tamanioLetraOriginal1 =
  document.getElementById('parrafo1').style.fontSize;
const tamanioLetraOriginal2 =
  document.getElementById('parrafo2').style.fontSize;
const tamanioLetraOriginal3 =
  document.getElementById('parrafo3').style.fontSize;

document.addEventListener('click', e => {
  switch (e.target.id) {
    case 'enlace1':
      ocultarParrafo('parrafo1', 'enlace1');
      break;
    case 'enlace2':
      ocultarParrafo('parrafo2', 'enlace2');
      break;
    case 'enlace3':
      ocultarParrafo('parrafo3', 'enlace3');
      break;
    case 'aumentar1':
      aumentarLetra('parrafo1');
      break;
    case 'aumentar2':
      aumentarLetra('parrafo2');
      break;
    case 'aumentar3':
      aumentarLetra('parrafo3');
      break;
    case 'disminuir1':
      disminuirLetra('parrafo1');
      break;
    case 'disminuir2':
      disminuirLetra('parrafo2');
      break;
    case 'disminuir3':
      disminuirLetra('parrafo3');
      break;
    case 'defecto1':
      tamanioOriginal('parrafo1', tamanioLetraOriginal1);
      break;
    case 'defecto2':
      tamanioOriginal('parrafo2', tamanioLetraOriginal2);
      break;
    case 'defecto3':
      tamanioOriginal('parrafo3', tamanioLetraOriginal3);
      break;
    default:
      break;
  }
});

function tamanioOriginal(parrafoString, fontOriginal) {
  console.log(document.getElementById(parrafoString).style.fontSize);
  const parrafo = document.getElementById(parrafoString);
  parrafo.style.fontSize = fontOriginal;
}

function disminuirLetra(parrafoString) {
  const parrafo = document.getElementById(parrafoString);
  let tamanioActual = parseFloat(parrafo.style.fontSize);
  let nuevoTamanio = tamanioActual - 1;
  parrafo.style.fontSize = `${nuevoTamanio}rem`;
}
function aumentarLetra(parrafoString) {
  const parrafo = document.getElementById(parrafoString);
  let tamanioActual = parseFloat(parrafo.style.fontSize);
  let nuevoTamanio = tamanioActual + 1;
  parrafo.style.fontSize = `${nuevoTamanio}rem`;
}

function ocultarParrafo(parrafoString, idEnlace) {
  const parrafo = document.getElementById(parrafoString);
  const enlace = document.getElementById(idEnlace);
  if (parrafo.style.display != 'none') {
    parrafo.style.display = 'none';
    enlace.innerHTML = `Leer contenidos ${parrafoString}`;
  } else {
    parrafo.style.display = '';
    enlace.innerHTML = `Ocultar contenidos ${parrafoString}`;
  }
}
