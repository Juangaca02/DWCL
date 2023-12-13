let mas50 = document.getElementById('mas50').style;
let mas100 = document.getElementById('mas100').style;
mas100.display = 'none';
const textosAviso = e => {
  if (e.target.matches('#area')) {
    const $input = e.target;
    const patron = $input.pattern || $input.dataset.pattern;
    const regEx = new RegExp(patron);
    if (regEx.exec($input.value) && $input.value.trim() !== '')
      mas50.display = 'none';
    else mas50.display = '';
    if ($input.value.length >= 100) {
      $input.value = $input.value.substring(0, 100);
      mas100.display = '';
    } else mas100.display = 'none';
    if (e.target.matches('#area')) {
      const $input = e.target;
      if (e.keyCode == 8 || e.keyCode == 46) {
        // Tecla retroceso o suprimir
        if ($input.value.length <= 100) {
          mas100.style.display = 'none';
        } else mas100.style.display = '';
      }
    }
  }
};

document.addEventListener('keypress', textosAviso);

document.addEventListener('keydown', textosAviso);
