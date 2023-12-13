function validarNombre() {
  let nombre = document.getElementById('nombre').value;

  if (nombre === '') {
    alert('Por favor, introduce tu nombre.');
    return false;
  }
}

document.addEventListener('click', e => {
  if (e.target.matches('#enviar')) {
    validarNombre();
    let sexo = document.querySelector('input[name="sexo"]:checked');
    if (!sexo) {
      alert('Por favor, elige tu sexo.');
      return false;
    }
  }
});

document.addEventListener('keyup', e => {
  if (e.target.matches('#nombre')) {
    const $input = e.target;
    const patron = $input.pattern || $input.dataset.pattern;
    const regEx = new RegExp(patron);
    if (regEx.exec($input.value) && $input.value.trim() !== '')
      document.getElementById('textoNombre').style.display = 'none';
    else document.getElementById('textoNombre').style.display = '';
  }
});
