const parrafos = document.querySelectorAll('p');

parrafos.forEach((parrafo, indice) => {
  parrafo.addEventListener('click', () => {
    parrafos.forEach(p => {
      p.style.color = 'black';
    });

    if (indice === 0) {
      parrafo.style.color = 'red';
    } else if (indice === 1) {
      parrafo.style.color = 'blue';
    } else if (indice === 2) {
      parrafo.style.color = 'green';
    }
  });
});
