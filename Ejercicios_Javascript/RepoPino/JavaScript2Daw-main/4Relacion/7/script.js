const generarArray = () => {
  const numerosAleatorios = [];

  for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 11);
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
};

const mayorYMenor = (callback) => {
  const array = callback;
  const newArray = [];
  newArray.push(Math.max(...array));
  newArray.push(Math.min(...array));
  return {
    newArray: newArray,
    array: array,
  };
};

const mayorYMenorResult = mayorYMenor(generarArray());
console.log(mayorYMenorResult.array);
console.log(mayorYMenorResult.newArray);

/*const generarArray = () =>{
    const numerosAleatorios = [];
    
    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 11); 
        numerosAleatorios.push(numeroAleatorio);
    }
    
    return numerosAleatorios;
}

const array = generarArray()

const mayorYMenor = () =>{
    const newArray = []
    newArray.push(Math.max(...array))
    newArray.push(Math.min(...array))
    return newArray
}


const mayorYMenorResult = mayorYMenor()
console.log(array)
console.log(mayorYMenorResult)
*/
