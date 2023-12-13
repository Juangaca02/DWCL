const mensaje = document.getElementById('changeBackground');
const fondoImagen = document.getElementById('backgroundImage');
const ALT_KEY_CODE = 18;

mensaje.addEventListener('click', cambiarFondo);
document.addEventListener('keydown', e => {
  if (e.keyCode === ALT_KEY_CODE) {
    cambiarFondo();
  }
});

function cambiarFondo() {
  fondoImagen.style.display = 'block';
  mensaje.style.display = 'none';
  document.body.style.background = 'none';
  fondoImagen.style.backgroundImage = 'url(fotaca.jpg)';
}
