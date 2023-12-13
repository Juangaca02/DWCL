document.addEventListener('click', e => {
  let area = document.getElementById('area');
  if (e.target.matches('#uno')) {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'red';
  }
  if (e.target.matches('#dos')) {
    area.style.display = 'inline';
  }
  if (e.target.matches('#tres')) {
    area.value = 'Estoy dentro del cuadro de texto';
    area.style.color = 'black';
    area.style.backgroundColor = 'green';
  }
  if (e.target.matches('#cuatro')) {
    let valor = area.value.split(' ');
    const palabrasAlReves = valor
      .reverse()
      .map(palabra => palabra.split('').reverse().join(''))
      .join(' ');
    area.value = palabrasAlReves;
  }
  if (e.target.matches('#cinco')) {
    let p = document.getElementById('numeroLetras');
    p.innerHTML = '';
    let valor = area.value;
    p.innerHTML += `${valor.length} letras con espacios`;
    valor = area.value.replace(/\s/g, '');
    p.innerHTML += ` y ${valor.length} sin espacios<br>`;
  }
});
