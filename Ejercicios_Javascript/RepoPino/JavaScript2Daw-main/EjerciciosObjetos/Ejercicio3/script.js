class Circulo {
  constructor(radio) {
     this.radio = radio
  }
 
  calcularArea() {
     return Math.PI * Math.pow(this.radio, 2)
  }
 
  calcularLongitud() {
     return 2 * Math.PI * this.radio
  }
 }

 const circulo = new Circulo(5)
 
 console.log(`El área del círculo es: ${circulo.calcularArea()}`)
 console.log(`La longitud del círculo es: ${circulo.calcularLongitud()}`)