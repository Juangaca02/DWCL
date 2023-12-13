const area = document.getElementById('observaciones1');

const colorAreaPorDefectoArea = area.style.color;
const colorBGPorDefectoArea = area.style.backgroundColor;

const verChecks = () => {
  const checkboxs = document.querySelectorAll("input[type='checkbox']:checked");
  console.log(`Los fallos de los dispositivos son`);
  checkboxs.forEach(value => {
    console.log(value.value);
  });
};

const cambiarTextArea = () => {
  area.style.color = 'white';
  area.style.backgroundColor = 'black';
};

const cambiarTextAreaOriginal = () => {
  area.style.color = colorAreaPorDefectoArea;
  area.style.backgroundColor = colorBGPorDefectoArea;
};

const ponerCamposPorttatil = () => {
  const label = document.getElementById('antiguedad');
  const div = document.createElement('div');
  div.id = 'camposPortatil';
  label.insertAdjacentElement('beforebegin', div);
  label.insertAdjacentHTML('beforebegin', '<br>');
  const divDeVerdad = document.getElementById('camposPortatil');
  const marca = document.createElement('input');
  marca.type = 'text';
  marca.placeholder = 'marca';
  marca.id = 'marca';
  marca.style.display = 'block';
  divDeVerdad.appendChild(marca);
  const modelo = document.createElement('input');
  modelo.type = 'text';
  modelo.placeholder = 'modelo';
  modelo.id = 'modelo';
  modelo.style.display = 'block';
  divDeVerdad.appendChild(modelo);
};

const eliminarCamposPortatil = () => {
  const div = document.getElementById('camposPortatil');
  div.remove();
};

const comprobarCkecks = () => {
  const checkboxs = document.querySelectorAll("input[type='checkbox']:checked");
  if (checkboxs.length > 0) {
    return true;
  }
  return false;
};

const comprobarContrasenia = e => {
  const patron = document.getElementById('password');
  //para usar el .tezt usamos un patron sin comillas
  const pattern = /^_[0-9]{3}[A-Z][a-z]_$/;
  const pt = patron.pattern;
  const regEx = new RegExp(pt);
  //Para usar regEx debemos poner en el fomulario el patron sin barras <input type="text" id="password" pattern="^_[0-9]{3}[A-Z][a-z]_$"><br>
  //pattern="^_[0-9]{3}[A-Z][a-z]_$"

  if (!regEx.exec(patron.value)) {
    //if (!pattern.test(patron.value)) {
    e.preventDefault();
    alert('patron incorrecto');
  }
  // \w a-z, A-Z, 0-9 o _
  // \s espacio en blanco
  // \S cualquier cosa que no sea un espacio en blanco
};

document.addEventListener('click', e => {
  if (e.target.matches('#enviar')) {
    //verChecks();
    if (!comprobarCkecks()) {
      e.preventDefault();
      alert('LLena checkboxs');
    }
  }
  if (e.target.matches('#observaciones1')) {
    cambiarTextArea();
  } else {
    cambiarTextAreaOriginal();
  }
  if (e.target.matches('#portatil')) {
    ponerCamposPorttatil();
  }
  if (e.target.matches('#sobremesa') || e.target.matches('#impresora')) {
    if (document.getElementById('camposPortatil')) eliminarCamposPortatil();
  }

  if (e.target.matches('#Enviar1')) {
    comprobarContrasenia(e);
  }
  mostrarFallos2(e);
});

const mostrarFallos2 = e => {
  const $checkbox = document.querySelectorAll(
    "input[type = 'checkbox']:checked"
  );
  $checkbox.forEach(value => {
    if (e.target.matches(`#${value.id}`)) {
      console.log('Falla en: ' + value.value);
    }
  });
};
