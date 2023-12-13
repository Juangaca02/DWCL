const ordenarBtn = document.getElementById('ordenar');
const divUl = document.getElementById('ul');
let lista;
let elementosLista;
const boton = document.getElementById('boton');
const nuevoElementoInput = document.getElementById('nuevoElemento');
const elementos = [
  'Ladrillo',
  'Cemento',
  'Losa',
  'Cemento Portland',
  'Ladrillo refractario',
  'Mortero',
  'Hormigón',
  'Azulejo',
  'Grava',
  'Cerámica'
];
const cargarLista = () => {
  lista = document.getElementById('lista');
  elementosLista = Array.from(lista.querySelectorAll('li'));
};

const crearLista = () => {
  ul = `<ul id="lista">`;
  elementos.forEach(value => {
    ul += `<li>${value}</li>`;
  });
  ul += `</ul>`;
  divUl.innerHTML = ul;
  cargarLista();
};

crearLista();

ordenarBtn.addEventListener('click', () => {
  cargarLista();
  elementosLista.sort((a, b) => a.textContent.localeCompare(b.textContent));

  elementosLista.forEach(elemento => {
    lista.removeChild(elemento);
  });

  elementosLista.forEach(elemento => {
    lista.appendChild(elemento);
  });
});

const agregar = () => {
  const nuevoTexto = nuevoElementoInput.value.trim();

  if (nuevoTexto !== '') {
    const nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = nuevoTexto;
    lista.appendChild(nuevoLi);
    nuevoElementoInput.value = '';
  }
};

boton.addEventListener('click', agregar);
nuevoElementoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') agregar();
});
