class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  cambiar(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  iguales(segundoPunto) {
    return this.x === segundoPunto.x && this.y === segundoPunto.y;
  }

  sumar(segundoPunto) {
    let nuevaX = this.x + segundoPunto.x;
    let nuevaY = this.y + segundoPunto.y;
    return new Punto(nuevaX, nuevaY);
  }

  distancia(segundoPunto) {
    let distanciaX = Math.pow(segundoPunto.x - this.x, 2);
    let distanciaY = Math.pow(segundoPunto.y - this.y, 2);
    return Math.sqrt(distanciaX + distanciaY);
  }
}

// Ejemplo de uso:
let punto1 = new Punto(3, 4);
let punto2 = new Punto(6, 8);
let punto1normal = { ...punto1 };

punto1.cambiar(5, 7);

document.querySelector('body').innerHTML = `El primer punto es ${
  punto1normal.x
}, ${punto1normal.y}<br>El segundo punto es ${punto2.x}, ${
  punto2.y
}<br>El primer punto cambiado es ${punto1.x}, ${punto1.y}<br>
¿Son estos puntos iguales? ${punto1.iguales(punto2)}<br>
La suma de los dos puntos es ${punto1.sumar(punto2).x}, ${
  punto1.sumar(punto2).y
}<br> la distancia es ${punto1.distancia(punto2)}`;
