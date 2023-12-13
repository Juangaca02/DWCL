const boton = document.getElementById("boton");
const ul = document.getElementById("diariosDeportivos");
const nuevoElementoInput = document.getElementById("nuevoElemento");

const agregar = () => {
  const nuevoTexto = nuevoElementoInput.value.trim();

  if (nuevoTexto !== "") {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nuevoTexto;
    ul.appendChild(nuevoLi);
    nuevoElementoInput.value = "";
  }
};
boton.addEventListener("click", () => {
  agregar();
});
nuevoElementoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") agregar();
});
