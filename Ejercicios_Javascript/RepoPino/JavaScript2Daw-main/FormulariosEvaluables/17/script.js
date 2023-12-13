class Fraccion {
  constructor(numerador, denominador) {
    this.numerador = numerador;
    this.denominador = denominador;
  }

  getNumerador() {
    return this.numerador;
  }

  getDenominador() {
    return this.denominador;
  }

  setNumerador(nuevoNumerador) {
    this.numerador = nuevoNumerador;
  }

  setDenominador(nuevoDenominador) {
    if (nuevoDenominador !== 0) {
      this.denominador = nuevoDenominador;
    } else {
      console.error('El denominador no puede ser cero.');
    }
  }

  imprimirFraccion() {
    return `${this.numerador}/${this.denominador}`;
  }

  simplificar() {
    const mcd = this.calcularMCD(this.numerador, this.denominador);
    this.numerador /= mcd;
    this.denominador /= mcd;
    return this;
  }

  multiplicarF(otraFraccion) {
    let nuevoNumerador = this.numerador * otraFraccion.getNumerador();
    let nuevoDenominador = this.denominador * otraFraccion.getDenominador();
    let resultado = new Fraccion(nuevoNumerador, nuevoDenominador);
    return resultado.simplificar();
  }

  dividirF(otraFraccion) {
    let nuevoNumerador = this.numerador * otraFraccion.getDenominador();
    let nuevoDenominador = this.denominador * otraFraccion.getNumerador();
    let resultado = new Fraccion(nuevoNumerador, nuevoDenominador);
    return resultado.simplificar();
  }

  calcularMCD(a, b) {
    if (b === 0) {
      return a;
    } else {
      return this.calcularMCD(b, a % b);
    }
  }
}

let fraccion1 = new Fraccion(4, 6);
console.log(fraccion1.imprimirFraccion());
console.log(fraccion1.simplificar().imprimirFraccion());

let fraccion2 = new Fraccion(3, 5);
let producto = fraccion1.multiplicarF(fraccion2);
console.log(producto.imprimirFraccion());

let division = fraccion1.dividirF(fraccion2);
console.log(division.imprimirFraccion());
