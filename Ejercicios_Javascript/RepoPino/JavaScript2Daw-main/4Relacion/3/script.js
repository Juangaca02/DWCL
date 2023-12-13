const subcadena = (str, sub) => {
  return str.value.replaceAll(sub.value, ``);
};

const escribir = (callback) => {
  document.write(callback);
};

/*
const subcadena = (str,sub) =>{
  const cadena = str.value.replaceAll(sub.value, ``)
  document.write(`${cadena}`)
}
*/
