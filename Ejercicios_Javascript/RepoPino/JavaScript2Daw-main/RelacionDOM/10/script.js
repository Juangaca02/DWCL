let elementosLista;
const boton = document.getElementById("boton");
const nuevoElementoInput = document.getElementById("nuevoElemento");
let miSelect;

const crearSelect = () => {
  const selectDiv = document.getElementById("selectDiv");
  let selectHTML = '<select id="miSelect">';
  for (let index = 0; index < elementosLista.length + 1; index++) {
    selectHTML += `<option value="${index}">${index + 1}</option>`;
  }
  selectHTML += "</select>";
  selectDiv.innerHTML = selectHTML;
  miSelect = document.getElementById("miSelect");
};

const cargarLista = () => {
  let lista = document.getElementById("lista");
  elementosLista = Array.from(lista.querySelectorAll("li"));
  crearSelect();
};

const crearLista = () => {
  const elementos = [
    "Ladrillo",
    "Cemento",
    "Losa",
    "Cemento Portland",
    "Ladrillo refractario",
  ];
  const divUl = document.getElementById("ul");
  ul = `<ul id="lista">`;
  elementos.forEach((value) => {
    ul += `<li>${value}</li>`;
  });
  ul += `</ul>`;
  divUl.innerHTML = ul;
  cargarLista();
};

const agregar = () => {
  const nuevoTexto = nuevoElementoInput.value.trim();
  if (nuevoTexto !== "") {
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = nuevoTexto;
    miSelect.value <= miSelect.length - 2
      ? elementosLista[miSelect.value].insertAdjacentElement(
          "beforebegin",
          nuevoLi
        )
      : lista.appendChild(nuevoLi);
  }
  nuevoElementoInput.value = "";
  cargarLista();
};

boton.addEventListener("click", agregar);
nuevoElementoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") agregar();
});

crearLista();
crearSelect();
