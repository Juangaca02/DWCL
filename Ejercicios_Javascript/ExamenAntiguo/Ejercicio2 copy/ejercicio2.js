class Carta {
    constructor(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }

    nombreCarta() {
        let nombrePalo, nombreValor;
        switch (this.palo) {
            case 1:
                nombrePalo = "corazones";
                break;
            case 2:
                nombrePalo = "diamantes";
                break;
            case 3:
                nombrePalo = "picas";
                break;
            case 4:
                nombrePalo = "trébol";
                break;
            default:
                nombrePalo = "palo inválido";
        }
        switch (this.valor) {
            case 1:
                nombreValor = "as";
                break;
            case this.valor:
                nombreValor = `${this.valor}`;
                break;

            case 11:
                nombreValor = "J";
                break;
            case 12:
                nombreValor = "Q";
                break;
            case 13:
                nombreValor = "K";
                break;
            default:
                nombreValor = "valor inválido";
        }
        return `${nombreValor} de ${nombrePalo}`;
    }

}

function calcular() {
    const palo = parseInt(document.getElementById("palo").value);
    const valor = parseInt(document.getElementById("valor").value);

    const carta = new Carta(palo, valor);

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
    <p>La Carta es: ${carta.nombreCarta()}</p>
`;
}