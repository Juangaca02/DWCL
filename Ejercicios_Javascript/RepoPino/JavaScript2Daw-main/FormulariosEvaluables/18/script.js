let textareaOriginal = document.getElementById('observaciones').value;
const valores1 = [
  'nombre',
  'apellidos',
  'domicilio',
  'observaciones',
  'input[name^="modulo"]:checked'
];
const valores2 = [
  'nombre2',
  'apellidos2',
  'domicilio2',
  'observaciones2',
  'input[name^="model"]:checked'
];

const validar = array => {
  // Obtener valores de los campos
  let nombre = document.getElementById(array[0]).value;
  let apellidos = document.getElementById(array[1]).value;
  let domicilio = document.getElementById(array[2]).value;
  let textareaMod = document.getElementById(array[3]).value;
  let modulos = document.querySelectorAll(array[4]);

  // Validar Nombre y Apellidos (solo letras y tildes)
  let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
  if (!regexLetras.test(nombre) || !regexLetras.test(apellidos)) {
    alert('Nombre y apellidos deben contener solo letras.');
    return false;
  }

  // Validar Domicilio (algo escrito)
  if (domicilio.trim() === '') {
    alert('Debe proporcionar un domicilio.');
    return false;
  }

  // Validar matrícula en al menos un módulo
  if (modulos.length < 1) {
    alert('Debe matricularse en al menos un módulo.');
    return false;
  }

  if (textareaMod == textareaOriginal) {
    alert('Ponga alguna observación');
    return false;
  }

  alert('Todo correcto');
  globalThis.location.reload();
};
document.addEventListener('click', e => {
  if (e.target.matches('#restablecerDAW')) {
    e.preventDefault();
    globalThis.location.reload();
  }
  if (e.target.matches('#restablecerSMR')) {
    e.preventDefault();
    globalThis.location.reload();
  }

  if (e.target.matches('#enviarDAW')) {
    e.preventDefault();
    validar(valores1);
  }

  if (e.target.matches('#enviarSMR')) {
    e.preventDefault();
    validar(valores2);
  }
});
