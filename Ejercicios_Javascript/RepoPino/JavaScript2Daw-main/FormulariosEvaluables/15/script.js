Math.mcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return Math.mcd(b, a % b);
  }
};

Math.mcm = (a, b) => {
  return (a * b) / Math.mcd(a, b);
};

document.querySelector(
  'h1'
).innerHTML = `El minimo comun multiplo de 24 y 36 es ${Math.mcm(
  24,
  36
)}<br> y el maximo comun divisor es ${Math.mcd(24, 36)}`;
