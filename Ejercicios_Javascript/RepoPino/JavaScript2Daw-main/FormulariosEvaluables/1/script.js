document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.matches('#limpiar')) {
    document.querySelectorAll('input[type="text"]').forEach(value => {
      value.value = '';
    });
  }
  if (e.target.matches('#enviar')) {
    const credenciales = ['admin', '1234'];
    let bandera = true;
    document.querySelectorAll('input[type="text"]').forEach((value, index) => {
      if (credenciales[index] != value.value) {
        bandera = false;
      }
    });
    if (bandera) alert('todo correcto');
    else alert('todo mal');
  }
});
