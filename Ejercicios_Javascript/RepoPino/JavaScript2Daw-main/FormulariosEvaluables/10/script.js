function mostrarParrafos() {
  const parrafos = document.querySelectorAll('p');
  for (let i = 0; i < parrafos.length; i++) {
    setTimeout(() => {
      parrafos[i].style.display = 'block';
    }, i * 1000);
  }
}

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.matches('#masParrafos')) {
    mostrarParrafos();
  }
});
