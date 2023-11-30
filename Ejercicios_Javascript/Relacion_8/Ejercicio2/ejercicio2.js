do {
    red = prompt('Introduce el valor para el canal rojo (0-255):');
    red = parseInt(red);
} while (red < 0 || red > 255);
do {
    green = prompt('Introduce el valor para el canal Verde (0-255):');
    green = parseInt(green);
} while (green < 0 || green > 255);
do {
    blue = prompt('Introduce el valor para el canal Azul (0-255):');
    blue = parseInt(blue);
} while (blue < 0 || blue > 255);

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;