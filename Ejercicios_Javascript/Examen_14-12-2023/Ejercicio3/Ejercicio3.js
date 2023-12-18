
document.addEventListener('click', e => {
    if (e.target.matches('#ocultar')) {
        ocualtarParrafo()
    }
    if (e.target.matches('#crearParrafoAnterior')) {
        //if (!document.getElementById('parrafoAnterior')) {
        mostrarParrafoAnterior()
        //}
    }
    if (e.target.matches('#InvertirColores')) {
        //const texto = document.getElementById('parrafo')
        //if ((texto.style.color = 'red') && (texto.style.background = 'white')) {
        //    cambiarColores2()
        //} else {
        cambiarColores1()
        //}
    }
})
document.addEventListener('dblclick', function () {
    const texto = document.getElementById('parrafo')
    texto.classList.remove('oculto');
    texto.classList.add('visible');
    //cambiarColores2()
});
document.addEventListener('keydown', function (event) {
    const texto = document.getElementById('parrafo');
    if (event.shiftKey && event.code === 'F10') {
        texto.style.color = ('white');
        texto.style.background = ('blue');
        texto.innerHTML = 'Vacio'
    }
});

function ocualtarParrafo() {
    const texto = document.getElementById('parrafo')
    texto.classList.remove('visible');
    texto.classList.add('oculto');
}

const mostrarParrafoAnterior = () => {
    const $antiguedad = document.getElementById('parrafo')
    const parrafo = document.createElement('p')
    parrafo.id = 'parrafoAnterior'
    parrafo.innerHTML = 'párrafo creado anterior al que había'
    $antiguedad.insertAdjacentElement("beforebegin", parrafo)
}

function cambiarColores1() {
    const texto = document.getElementById('parrafo')
    texto.style.color = ('red');
    texto.style.background = ('white');
}
function cambiarColores2() {
    const texto = document.getElementById('parrafo')
    texto.style.color = ('white');
    texto.style.background = ('red');
}
