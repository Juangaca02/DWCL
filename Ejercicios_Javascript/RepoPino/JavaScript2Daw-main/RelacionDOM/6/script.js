const invertirBtn = document.getElementById('invertir');
const contenedor = document.getElementById('contenedor');
let parrafos = document.querySelectorAll('p');

const cargarParrafos = () => {
  parrafos = document.querySelectorAll('p');
};

invertirBtn.addEventListener('click', () => {
  const parrafosInvertidos = Array.from(parrafos).reverse();

  // Elimina los párrafos existentes del contenedor
  parrafos.forEach(parrafo => {
    contenedor.removeChild(parrafo);
  });

  // Agrega los párrafos invertidos de nuevo al contenedor
  parrafosInvertidos.forEach(parrafo => {
    contenedor.appendChild(parrafo);
  });
  cargarParrafos();
});
