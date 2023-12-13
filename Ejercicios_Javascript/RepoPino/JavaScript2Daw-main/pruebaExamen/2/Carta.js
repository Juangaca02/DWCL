class Carta {
  PALO = ['corazones', 'diamantes', 'picas', 'trébol'];
  VALOR = ['as', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  nombreCarta(palo, valor) {
    return `La carta es el ${this.VALOR[valor - 1]} de ${this.PALO[palo - 1]}`;
  }
}

document.addEventListener('click', e => {
  if (e.target.matches('#enviar')) {
    e.preventDefault();
    let carta = new Carta();
    document.getElementById('result').innerHTML = carta.nombreCarta(
      document.getElementById('palo').value,
      document.getElementById('numero').value
    );
  }
});
