let numero = prompt('Introduce un número entero positivo:');

alert(`El factorial del número ${numero} es ${factorial(numero)}`);

function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}
