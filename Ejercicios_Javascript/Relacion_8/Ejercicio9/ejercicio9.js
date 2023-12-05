function convertirDistancia() {
    const inputDistancia = document.getElementById('inputKm-M').value;
    const selectDistancia = document.getElementById('selectKm-M').value;
    const solucionDistancia = document.getElementById('solucionKm-m');

    // Limpiar solucion previa
    solucionDistancia.textContent = '';

    if (inputDistancia !== '') {
        let solucion = 0;
        if (selectDistancia === 'M') {
            solucion = inputDistancia * 1000;
            solucionDistancia.textContent = `${solucion} metros`;
        } else if (selectDistancia === 'Km') {
            solucionDistancia.textContent = `${solucion} km`;
        }
    }
}

function convertirPeso() {
    const inputPeso = document.getElementById('inputKg-G').value;
    const selectPeso = document.getElementById('selectKg-G').value;
    const solucionPeso = document.getElementById('solucionKg-G');

    // Limpiar solucion previa
    solucionPeso.textContent = '';

    if (inputPeso !== '') {
        let solucion = 0;
        if (selectPeso === 'G') {
            solucion = inputPeso * 1000;
            solucionPeso.textContent = `${solucion} gramos`;
        } else if (selectPeso === 'Kg') {
            solucion = inputPeso / 1000;
            solucionPeso.textContent = `${solucion} kg`;
        }
    }
}

document.addEventListener('click', e => {
    e.preventDefault();
    switch (e.target.id) {
        case 'convertirKm-m':
            convertirDistancia();
            break;
        case 'convertirKg-G':
            convertirPeso();
            break;
        case 'inputKm-m':
            document.getElementById('inputKg-G').value = '';
            document.getElementById('solucionKg-G').textContent = '';
            break;
        case 'inputPeso':
            document.getElementById('inputKm-m').value = '';
            document.getElementById('solucionKm-m').textContent = '';
            break;
        default:
            break;
    }
});