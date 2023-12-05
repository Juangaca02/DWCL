function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

class Fraccion {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
        this.simplificar();
    }

    getNumerador() {
        return this.numerador;
    }

    getDenominador() {
        return this.denominador;
    }

    setNumerador(numerador) {
        this.numerador = numerador;
        this.simplificar();
    }

    setDenominador(denominador) {
        if (denominador !== 0) {
            this.denominador = denominador;
            this.simplificar();
        } else {
            console.log("Error: El denominador no puede ser cero.");
        }
    }

    imprimirFraccion() {
        return `${this.numerador}/${this.denominador}`;
    }

    simplificar() {
        const mcd = gcd(this.numerador, this.denominador);
        this.numerador /= mcd;
        this.denominador /= mcd;
    }

    multiplicarF(otraFraccion) {
        const numeradorResultante = this.numerador * otraFraccion.getNumerador();
        const denominadorResultante = this.denominador * otraFraccion.getDenominador();
        const resultado = new Fraccion(numeradorResultante, denominadorResultante);
        return resultado;
    }

    dividirF(otraFraccion) {
        if (otraFraccion.getNumerador() !== 0) {
            const numeradorResultante = this.numerador * otraFraccion.getDenominador();
            const denominadorResultante = this.denominador * otraFraccion.getNumerador();
            const resultado = new Fraccion(numeradorResultante, denominadorResultante);
            return resultado;
        } else {
            console.log("Error: No se puede dividir por cero.");
            return null;
        }
    }
}

function calcular() {
    const numerador1 = parseInt(document.getElementById("numerador1").value);
    const denominador1 = parseInt(document.getElementById("denominador1").value);
    const numerador2 = parseInt(document.getElementById("numerador2").value);
    const denominador2 = parseInt(document.getElementById("denominador2").value);

    const fraccion1 = new Fraccion(numerador1, denominador1);
    const fraccion2 = new Fraccion(numerador2, denominador2);

    const resultadoMultiplicacion = fraccion1.multiplicarF(fraccion2);
    const resultadoDivision = fraccion1.dividirF(fraccion2);

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
    <p>Fracción 1: ${fraccion1.imprimirFraccion()}</p>
    <p>Fracción 2: ${fraccion2.imprimirFraccion()}</p>
    <p>Resultado de la multiplicación: ${resultadoMultiplicacion.imprimirFraccion()}</p>
    <p>Resultado de la división: ${resultadoDivision ? resultadoDivision.imprimirFraccion() : 'No se puede dividir por cero.'}</p>
`;
}