const str = `Miguel Angel`;

const invertir = (str) => {
  return str.split("").reverse().join("");
};

document.write(`${str}, ${invertir(str)}`);
