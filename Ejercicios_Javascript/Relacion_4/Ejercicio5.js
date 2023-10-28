function calcularAniosTranscurridos(fecha) {
    const fechaActual = new Date();  // Obten la fecha actual.
    const fechaIngresada = new Date(fecha);  // Crea un objeto Date a partir de la fecha ingresada.

    // Calcula la diferencia en milisegundos entre la fecha actual y la fecha ingresada.
    const diferenciaEnMilisegundos = fechaActual - fechaIngresada;

    // Convierte la diferencia de milisegundos a años.
    const milisegundosEnUnAnio = 1000 * 60 * 60 * 24 * 365.25;  // Considera años bisiestos.
    const aniosTranscurridos = diferenciaEnMilisegundos / milisegundosEnUnAnio;

    // Redondea el resultado, ya que los años completos son los que importan.
    return Math.floor(aniosTranscurridos);
}

// Ejemplo de uso:
const fechaIngresada = document.getElementById("textoInput").value // Debes proporcionar la fecha en formato "YYYY-MM-DD"
const aniosPasados = calcularAniosTranscurridos(fechaIngresada);
console.log(`Han pasado ${aniosPasados} años desde ${fechaIngresada} hasta la fecha actual.`);
