class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    cambiar(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    iguales(punto2) {
        return this.x === punto2.x && this.y === punto2.y;
    }

    sumar(punto2) {
        return new Punto(this.x + punto2.x, this.y + punto2.y);
    }

    distancia(punto2) {
        return Math.sqrt(Math.pow((punto2.x - this.x), 2) + Math.pow((punto2.y - this.y), 2));
    }
}

function Calcular() {
    const x1 = parseInt(document.getElementById('x1').value);
    const y1 = parseInt(document.getElementById('y1').value);
    const x2 = parseInt(document.getElementById('x2').value);
    const y2 = parseInt(document.getElementById('y2').value);

    const punto1 = new Punto(x1, y1);
    const punto2 = new Punto(x2, y2);

    document.getElementById('resultado').innerText =
        `Son los puntos iguales?: ${punto1.iguales(punto2)}, 
        La suma de puntos: (${punto1.sumar(punto2).x}, ${punto1.sumar(punto2).y}), 
    La distancia entre puntos: ${punto1.distancia(punto2)}`;
}