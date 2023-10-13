const fecha = new Date();
let numMes = fecha.getMonth()
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",]
let diaMes = meses[numMes]

let numSemana = fecha.getDay()
let semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
let diaSemana = semana[numSemana]

if (numMes >= 0 && numMes <= 3) {
    cuatri = "primer"
} else if (numMes >= 4 && numMes <= 7) {
    cuatri = "segundo"
} else{
    cuatri = "tercer"
}

let anio = fecha.getFullYear()

document.write(`Hoy es ${diaSemana} de ${diaMes} y estamos en el ${cuatri} cuatrimestre del año ${anio}`)
