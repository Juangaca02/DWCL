
document.addEventListener('click', e => {
  if (e.target.matches('#Enviar1')) {
    hayAlmenosUnaAveria(e)
    comprobarContrasenia(e)
  }

  if (e.target.matches('#portatil')) {
    //mostrartInput2();
    if (!document.getElementById('camposPortatil')) {
      mostrartInput()
    }
  }
  if (e.target.matches('#sobremesa')) {
    //ocultartInput2();
    ocultartInput()
  }
  if (e.target.matches('#Impresora')) {
    //ocultartInput2();
    ocultartInput()
  }

  if (e.target.matches('#observaciones1')) {
    e.preventDefault();
    muestraAveria();
  }
  muestraAveria(e);
});
/*
• beforebegin': Antes del elementoObjetivo.
• 'afterbegin': Dentro del elementoObjetivo, antes de su primer hijo.
• 'beforeend': Dentro del elementoObjetivo, después de su último hijo.
• 'afterend': Después del elementoObjetivo.
 */
const mostrartInput = () => {
  const $antiguedad = document.getElementById('antiguedad')
  const div = document.createElement('div')
  div.id = 'camposPortatil'
  $antiguedad.insertAdjacentElement("beforebegin", div)
  const $camposPortatil = document.getElementById('camposPortatil')
  const inputMarca = document.createElement('input')
  inputMarca.type = 'text'
  inputMarca.id = 'marca'
  inputMarca.placeholder = 'marca portatil'
  inputMarca.style.display = 'block'
  $camposPortatil.appendChild(inputMarca)
  const inputModelo = document.createElement('input')
  inputModelo.type = 'text'
  inputModelo.id = 'modelo'
  inputModelo.placeholder = 'modelo portatil'
  inputModelo.style.display = 'block'
  $camposPortatil.appendChild(inputModelo)
  $camposPortatil.insertAdjacentHTML("beforeend", '<br>')
}

const ocultartInput = () => {
  const $camposPortatil = document.getElementById('camposPortatil')
  $camposPortatil.remove()
}

const muestraAveria = e => {
  const $checkbox = document.querySelectorAll(
    "input[type = 'checkbox']:checked"
  );
  $checkbox.forEach(value => {
    if (e.target.matches(`#${value.id}`)) {
      console.log('Falla en: ' + value.value);
    }
  });
};

const hayAlmenosUnaAveria = (e) => {
  const $checkbox = document.querySelectorAll(
    "input[type = 'checkbox']:checked"
  );
  if (!$checkbox.length > 0) {
    e.preventDefault()
    alert('Aguayo gordo elije uno')
  }

};

const comprobarContrasenia = e => {
  const patron = document.getElementById('password');
  //para usar el .tezt usamos un patron sin comillas
  const pattern = /^_[0-9]{3}[A-Z][a-z]_$/;
  //Para usar regEx debemos poner en el fomulario el patron sin barras <input type="text" id="password" pattern="^_[0-9]{3}[A-Z][a-z]_$"><br>
  //pattern="^_[0-9]{3}[A-Z][a-z]_$"
  if (!pattern.test(patron.value)) {
    e.preventDefault();
    alert('patron incorrecto');
  }
  // \w a-z, A-Z, 0-9 o _
  // \s espacio en blanco
  // \S cualquier cosa que no sea un espacio en blanco
};

function mostrartInput2() {
  const input = document.querySelectorAll("input[name = 'inputPortatil']")
  input.forEach(element => {
    element.classList.remove('oculto');
    element.classList.add('visible');
  });
}

function ocultartInput2() {
  const input = document.querySelectorAll("input[name = 'inputPortatil']")
  input.forEach(element => {
    element.classList.remove('visible');
    element.classList.add('oculto');
  });
}


function cambiarColorFondo(elemento) {
  const texto = document.getElementById('observaciones1')
  texto.style.color = 'white';
  texto.style.background = 'black';
}

function restaurarColorFondo() {
  const texto = document.getElementById('observaciones1')
  texto.style.background = 'white';
  texto.style.color = 'black';
}
