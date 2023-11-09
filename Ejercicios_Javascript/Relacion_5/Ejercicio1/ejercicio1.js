const enlaces = document.getElementsByTagName('a')
console.log("a) Número de enlaces de la página:", enlaces.length)

// Dirección a la que enlaza el penúltimo enlace
//const penultimoEnlace = enlaces[enlaces.length - 2]
console.log("b) Dirección del penúltimo enlace:", enlaces[enlaces.length - 2].getAttribute('href'))

// (.filter) Filtra el array y devuelve los valores que tenga ese Array, con el parametro que le hallas pasado
const enlacesMarca = [...enlaces].filter(enlace => enlace.getAttribute('href') === 'http://www.marca.com')
console.log("c) Número de enlaces que enlazan a http://www.marca.com:", enlacesMarca.length)

// Se crea un Array con la cantidad de <p> que hay en el documento y entra el el segundo con [2]
const tercerParrafoEnlaces = document.getElementsByTagName('p')[2].getElementsByTagName('a').length
console.log("d) Número de enlaces del tercer párrafo:", tercerParrafoEnlaces)