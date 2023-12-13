const generarArray = (n = 10, max = 10) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max + 1)));
};

const array = generarArray();

const ordenar = (array) => {
  return {
    arrayAscendente: [...array].sort((a, b) => a - b),
    arrayDescendente: [...array].sort((a, b) => b - a),
  };
};

const ambosArrays = ordenar(array);

console.log(ambosArrays.arrayAscendente);
console.log(ambosArrays.arrayDescendente);
