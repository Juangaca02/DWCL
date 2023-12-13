const subcadena = (str, sub) => {
  const veces = str.value.split(sub.value);
  return `${veces.length - 1} veces`;
};

const escribir = (callback) => {
  document.write(callback);
};

/*
const subcadena = (str,sub) =>{
  const veces = str.value.split(sub.value)
  document.write(`${veces.length - 1} veces`)
}
*/
