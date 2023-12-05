function mcd(a, b) {
    return b === 0 ? a : mcd(b, a % b);
}

function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

function calcular() {
    const numeroA = parseInt(document.getElementById('numeroA').value);
    const numeroB = parseInt(document.getElementById('numeroB').value);

    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        const resultadoMCD = mcd(numeroA, numeroB);
        const resultadoMCM = mcm(numeroA, numeroB);

        document.getElementById('resultadoMCD').innerText = `El MCD de ${numeroA} y ${numeroB} es: ${resultadoMCD}`;
        document.getElementById('resultadoMCM').innerText = `El MCM de ${numeroA} y ${numeroB} es: ${resultadoMCM}`;
    } else {
        alert('Por favor, ingrese números válidos.');
    }
}