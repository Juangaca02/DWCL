let tr;
let td;

document.getElementById('boton').addEventListener('click', function () {
  generarApuesta();
});

document.addEventListener('keyup', e => {
  if (e.keyCode == 13) {
    generarApuesta();
  }
});
const generarApuesta = () => {
  // Generar números aleatorios únicos entre 1 y 49
  const numeros = [];
  while (numeros.length < 6) {
    const numeroAleatorio = Math.floor(Math.random() * 49) + 1;
    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio);
    }
  }

  // Limpiar la tabla
  const tabla = document.getElementById('tabla');

  // Llenar la tabla con los números generados
  const matriz = [];
  let contador = 1;

  for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      numeros.includes(contador)
        ? (matriz[i][j] = '❌')
        : (matriz[i][j] = contador);
      contador++;
    }
  }
  tabla.querySelectorAll('tr td').forEach(value => {
    value.remove();
  });

  matriz.forEach(fila => {
    const filaTabla = document.createElement('tr');

    fila.forEach(celda => {
      const celdaTabla = document.createElement('td');
      celdaTabla.textContent = celda;
      filaTabla.appendChild(celdaTabla);
    });

    tabla.appendChild(filaTabla);
  });
};
