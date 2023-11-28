const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
do {
    red = prompt('Introduce el valor para el canal rojo (0-255):');
    red = parseInt(red);
} while (red < 0 || red > 255);