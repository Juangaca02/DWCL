/*>< */
function cifrarTexto() {
    const textoOriginal = document.getElementById('texto').value;

    if (textoOriginal.trim() === '') {
        alert('Por favor, ingresa un texto válido.');
        return;
    }

    const desplazamiento = obtenerDesplazamientoAleatorio();
    const textoCifrado = cifrar(textoOriginal, desplazamiento);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Texto Original:</strong> ${textoOriginal}</p>
        <p><strong>Texto Cifrado:</strong> ${textoCifrado}</p>
        <p><strong>Desplazamiento:</strong> ${desplazamiento}</p>
    `;
}

function cifrar(texto, desplazamiento) {
    return texto.replace(/[a-zA-Z]/g, function (letra) {
        const esMayuscula = letra === letra.toUpperCase();
        const offset = esMayuscula ? 65 : 97;
        return String.fromCharCode((letra.charCodeAt(0) - offset + desplazamiento) % 26 + offset);
    });
}

function obtenerDesplazamientoAleatorio() {
    return Math.floor(Math.random() * 25) + 1;
}