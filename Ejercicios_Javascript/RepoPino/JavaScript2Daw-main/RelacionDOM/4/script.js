const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const enviarBtn = document.getElementById("enviar");
const limpiarBtn = document.getElementById("limpiar");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = nombreInput.value;
  const apellidos = apellidosInput.value;

  if (nombre && apellidos) {
    const mensaje = `¡Bienvenido, ${nombre} ${apellidos}!`;
    mensajeBienvenida.textContent = mensaje;
  }
});

limpiarBtn.addEventListener("click", function () {
  nombreInput.value = "";
  apellidosInput.value = "";
  mensajeBienvenida.textContent = "";
});
