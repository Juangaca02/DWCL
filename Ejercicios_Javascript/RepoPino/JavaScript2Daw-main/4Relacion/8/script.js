const generarArray = (n = 10, max = 10) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max + 1)));
};

const separar = (array) => {
  const obj = {
    pares: [],
    impares: [],
  };
  array.forEach((value) => {
    value % 2 == 0 ? obj.pares?.push(value) : obj.impares?.push(value);
  });

  return obj;
};

const { pares, impares } = separar(generarArray());

console.log(pares);
console.log(impares);
