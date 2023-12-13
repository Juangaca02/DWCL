const cuadro = document.getElementById("cuadro");

const moverRaton = (event) => {
  cuadro.style.backgroundColor = "blue";
  cuadro.innerHTML = `Posición X: ${event.clientX}, Y: ${event.clientY}`;
};
const PulsarTecla = (event) => {
  cuadro.style.backgroundColor = "red";
  cuadro.innerHTML = `Tecla pulsada: ${event.key}, Código ASCII: ${event.keyCode}`;
};

document.addEventListener("mousemove", moverRaton);
document.addEventListener("keydown", PulsarTecla);

document.addEventListener("mouseout", () => {
  cuadro.style.backgroundColor = "blue";
  cuadro.innerHTML = "";
});
