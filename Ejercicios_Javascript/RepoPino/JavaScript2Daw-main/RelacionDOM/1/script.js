const enlazes = document.querySelectorAll("a");
console.log(`Tenemos ${enlazes.length}`);
console.log(`${enlazes[enlazes.length - 2]}`);
const referencia = document.querySelectorAll("[href]");
let numEnlacesMarca = 0;
referencia.forEach((value) => {
  //console.log(value.href);
  if (value.href == "http://www.marca.es/") {
    numEnlacesMarca++;
  }
});

console.log(`hay ${numEnlacesMarca} enlaces al Marca`);

const parrafos = document.querySelectorAll("p");
let parrafo3 = parrafos[2];
console.log(
  `hay ${parrafo3.querySelectorAll("a").length} enlaces dentro del parrafo 3`
);
