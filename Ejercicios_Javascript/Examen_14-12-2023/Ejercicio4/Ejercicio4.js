class Reserva {
    constructor(aula, profesor, dia, hora, duracion) {
        this.aula = aula;
        this.profesor = profesor;
        this.dia = dia;
        this.hora = hora;
        this.duracion = duracion;
    }
}

let reservaActual = new Reserva(null, null, null, null, 1);

const aulaInput = document.getElementById('aulaInput');
const profesorInput = document.getElementById('profesorInput');
const diaInput = document.getElementById('diaInput');
const horaInput = document.getElementById('horaInput');
const reservaInfo = document.getElementById('reserva-info');

function realizarReserva() {
    if (!aulaInput.value || !profesorInput.value || !diaInput.value || !horaInput.value) {
        alert("Por favor, rellene todos los campos.");
        return;
    }
    reservaActual.aula = aulaInput.value;
    reservaActual.profesor = profesorInput.value;
    reservaActual.dia = diaInput.value;
    reservaActual.hora = horaInput.value;
    if (horaInput.value != 1) {
        if (horaInput.value > 3.5) {
            alert("No es posible aumentar el tiempo de reserva, se supera el límite máximo de 3.5 horas.");
            return;
        } else {
            reservaActual.duracion = horaInput.value;

        }
    }
    mostrarReserva();

}

function aumentarTiempo() {
    const tiempoAumentar = parseFloat(prompt("Ingrese el tiempo a aumentar en horas:"));
    if (!isNaN(tiempoAumentar)) {
        const numero = reservaActual.duracion + tiempoAumentar
        console.log(numero);
        if (reservaActual.duracion + tiempoAumentar <= 3.5) {
            reservaActual.duracion += tiempoAumentar;
            console.log(reservaActual.duracion);
            mostrarReserva();
            alert("Se ha aumentado el tiempo de reserva.");
        } else {
            alert("No es posible aumentar el tiempo de reserva, se supera el límite máximo de 3.5 horas.");
        }
    } else {
        alert("Ingrese un valor numérico válido.");
    }
}

function mostrarReserva() {
    reservaInfo.innerHTML = `Reserva Actual: Aula: ${reservaActual.aula} Profesor: ${reservaActual.profesor} Día: ${reservaActual.dia} Hora: ${reservaActual.hora} Duración: ${reservaActual.duracion} horas`
}