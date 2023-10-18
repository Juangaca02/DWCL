class Circle {
    constructor(radio) {
        this.radio = radio;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radio,2);
    }

    calculateCircunferencia() {
        return 2 * Math.PI * this.radio;
    }
}

const miCirculo = new Circle(5);

const area = miCirculo.calculateArea();
const longitud = miCirculo.calculateCircunferencia();

console.log("Área del círculo:", area);
console.log("Longitud del círculo:", longitud);