const enlace = document.getElementById("enlace");

const elemento = document.getElementById("leermas");

const textoEnlaceLeerMas = `Leer más`;
const textoEnlaceLeerMenos = `Leer menos`;

const styleVisible = `visible`;
const styleOculto = `oculto`;

const mostrarTexto = () => {
  elemento.className = styleVisible;

  enlace.innerHTML = textoEnlaceLeerMenos;
};

const ocultarTexto = () => {
  elemento.className = styleOculto;

  enlace.innerHTML = textoEnlaceLeerMas;
};

enlace.addEventListener("click", () => {
  if (elemento.className == styleOculto) {
    mostrarTexto();
  } else {
    ocultarTexto();
  }
});
