function convertirDistancia() {
  const inputDistancia = document.getElementById('inputDistancia').value;
  const selectDistancia = document.getElementById('selectDistancia').value;
  const resultadoDistancia = document.getElementById('resultadoDistancia');

  // Limpiar resultado previo
  resultadoDistancia.textContent = '';

  if (inputDistancia !== '') {
    let resultado = 0;

    if (selectDistancia === 'metros') {
      resultado = inputDistancia * 1000; // Convertir de Km a Metros
      resultadoDistancia.textContent = `Resultado: ${resultado} metros`;
    } else if (selectDistancia === 'kilometros') {
      resultado = inputDistancia / 1000; // Convertir de Metros a Km
      resultadoDistancia.textContent = `Resultado: ${resultado} km`;
    }
  } else {
    alert('Ingrese un valor para convertir.');
  }
}

function convertirPeso() {
  const inputPeso = document.getElementById('inputPeso').value;
  const selectPeso = document.getElementById('selectPeso').value;
  const resultadoPeso = document.getElementById('resultadoPeso');

  // Limpiar resultado previo
  resultadoPeso.textContent = '';

  if (inputPeso !== '') {
    let resultado = 0;

    if (selectPeso === 'gramos') {
      resultado = inputPeso * 1000; // Convertir de Kg a Gramos
      resultadoPeso.textContent = `Resultado: ${resultado} gramos`;
    } else if (selectPeso === 'kilogramos') {
      resultado = inputPeso / 1000; // Convertir de Gramos a Kg
      resultadoPeso.textContent = `Resultado: ${resultado} kg`;
    }
  } else {
    alert('Ingrese un valor para convertir.');
  }
}

document.addEventListener('click', e => {
  e.preventDefault();
  switch (e.target.id) {
    case 'convertirDistancia':
      convertirDistancia();
      break;
    case 'convertirPeso':
      convertirPeso();
      break;
    case 'inputDistancia':
      document.getElementById('inputPeso').value = '';
      document.getElementById('resultadoPeso').textContent = '';
      break;
    case 'inputPeso':
      document.getElementById('inputDistancia').value = '';
      document.getElementById('resultadoDistancia').textContent = '';
      break;
    default:
      break;
  }
});
