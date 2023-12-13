
function cambiarRojo() {
    document.body.style.background = 'red';
}

function cambiarNomal() {
    document.body.style.background = 'white';
}

function mostrartTextArea() {
    const texto = document.querySelector('textarea')
    texto.classList.remove('oculto');
    texto.classList.add('visible');
    const p = document.getElementById('p1')
    p.classList.remove('oculto');
    p.classList.add('visible');
}

function mostrarP() {
    const texto = document.querySelector('textarea')
    texto.innerHTML = 'Estoy dentro del cuadro de texto';
    texto.style.color = ('white');
    texto.style.background = ('green');
}

function invertir() {
    const texto = document.querySelector('textarea')
    let palabras = texto.value.split(/\s+/)
    texto.innerHTML = palabras.reverse().map(palabra => palabra.split("").reverse().join("")).join(" ");
}

function contarCaracteres() {
    const texto = document.querySelector('textarea')
    const caracteres = document.getElementById("caracteres")
    caracteres.innerHTML += `${texto.value.length} con espacio `
    let sinEspacio = texto.value.replace(/\s/g, '')
    caracteres.innerHTML += `${sinEspacio.length} sin espacio`
}
