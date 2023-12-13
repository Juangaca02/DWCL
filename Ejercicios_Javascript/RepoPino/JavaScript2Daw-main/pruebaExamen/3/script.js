const tabla = document.getElementById('tabla');

document.addEventListener('click', e => {
  if (e.target.matches('#enviar')) {
    e.preventDefault();
    tabla.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos elementos
    const array = [];
    const dobles = document.getElementById('dobles').value;

    for (let index = 0; index < dobles; index++) {
      let numeroASUbir = 0;
      do {
        numeroASUbir = Math.floor(Math.random() * 14) + 1;
      } while (array.includes(numeroASUbir));
      array.push(numeroASUbir);
    }

    for (let index = 0; index < 14; index++) {
      let fila = `<tr><td>Partido${index + 1}</td>`; // Comenzar una nueva fila
      const array2 = [];
      if (array.includes(index + 1)) {
        while (array2.length < 2) {
          numeroASUbir = Math.floor(Math.random() * 3) + 1;
          if (!array2.includes(numeroASUbir)) {
            array2.push(numeroASUbir);
          }
        }
      } else {
        numeroASUbir = Math.floor(Math.random() * 3) + 1;
        array2.push(numeroASUbir);
      }
      fila += array2.includes(1) ? `<td>1</td>` : `<td>⬜</td>`;
      fila += array2.includes(2) ? `<td>X</td>` : `<td>⬜</td>`;
      fila += array2.includes(3) ? `<td>2</td>` : `<td>⬜</td>`;

      fila += '</tr>'; // Cerrar la fila
      tabla.innerHTML += fila; // Agregar la fila a la tabla
    }
  }
});
