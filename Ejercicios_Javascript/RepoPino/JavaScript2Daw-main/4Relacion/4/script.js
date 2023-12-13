const capicua = (number) => {
  const inverso = number.split("").reverse().join("");
  return {
    boolean: Number(inverso) === Number(number),
    inverso: inverso,
    number: number,
  };
};

const escribir = (callback) => {
  callback.boolean === true
    ? document.write(
        `${callback.number} es igual a ${callback.inverso}, el número es capicua`
      )
    : document.write(
        `${callback.number} NO es igual a ${callback.inverso}, el número NO es capicua`
      );
};
