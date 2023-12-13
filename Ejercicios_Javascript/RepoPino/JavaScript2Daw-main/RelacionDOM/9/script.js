const primerParrafo = document.getElementById('p');
const botonAniadir = document.getElementById('botonAniadir');
const botonEliminar = document.getElementById('botonEliminar');
const botonModificar = document.getElementById('botonModificar');
const nuevoElementoInput = document.getElementById('nuevoElemento');
const area = document.getElementById('area');

botonEliminar.disabled = true;
botonModificar.disabled = true;

botonAniadir.addEventListener('click', () => {
  const nuevoTexto = nuevoElementoInput.value.trim();

  if (nuevoTexto !== '') {
    let parrafoAInsertar = document.createElement('p');
    parrafoAInsertar.textContent = nuevoTexto;
    primerParrafo.parentNode.insertBefore(
      parrafoAInsertar,
      primerParrafo.nextSibling
    );
    nuevoElementoInput.value = '';
    botonAniadir.disabled = true;
    botonEliminar.disabled = false;
    botonModificar.disabled = false;
  }
});

botonModificar.addEventListener('click', () => {
  let areaValor = area.value;
  if (areaValor != '') {
    primerParrafo.nextSibling.innerHTML = areaValor;
  }
});

botonEliminar.addEventListener('click', () => {
  primerParrafo.nextSibling.remove();
  botonAniadir.disabled = false;
  botonEliminar.disabled = true;
  botonModificar.disabled = true;
});
