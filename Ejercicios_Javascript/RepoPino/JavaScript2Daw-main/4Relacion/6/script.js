const vocalConsonante = (cadena) => {
  cadena = cadena.toLowerCase().split("");

  const esVocal = /[aeiouáéíóú]/;

  const obj = {
    contadorDeVocales: 0,
    contarDeConsonantes: 0,
  };

  cadena.forEach((element) => {
    if (esVocal.test(element)) {
      obj.contadorDeVocales++;
    } else if (/^[a-z]$/.test(element) || element === "ñ") {
      obj.contarDeConsonantes++;
    }
  });

  return obj;
};

const escribir = (callback) => {
  const { contadorDeVocales, contarDeConsonantes } = callback;
  document.write(
    `La frase tiene ${contarDeConsonantes} consonantes y ${contadorDeVocales} vocales`
  );
};
