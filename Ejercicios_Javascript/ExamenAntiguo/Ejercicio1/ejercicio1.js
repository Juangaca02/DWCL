
const muestraAveria = () => {
    const averiaSeleccionada = document.querySelectorAll('input[type^="checkbox"]:checked');
    const sintomasSeleccionados =
        Array.from(averiaSeleccionada).map(function (checkbox) {
            console.log("Has Seleccionado: " + checkbox.value);
        });
}


document.addEventListener('click', e => {
    if (e.target.matches('#Enviar1')) {
        e.preventDefault();

    }
    if (e.target.matches('#observaciones1')) {
        e.preventDefault();
        muestraAveria();
    }
    muestraAveria(e);
});
