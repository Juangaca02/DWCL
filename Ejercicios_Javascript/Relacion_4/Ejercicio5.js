//Calcular diferencia con function
function calcularfecha() {
    const fechaIngresada = document.getElementById('fecha').value
    const fechaInicio = new Date(fechaIngresada).getFullYear()
    const fechaActual = new Date().getFullYear()
    const resultado = Math.abs(fechaActual - fechaInicio)
    document.getElementById("resultado").textContent = `Hay una diferencia de ${resultado} años entre ${fechaIngresada} y ${fechaActual}`
}

//Calcular diferencia con const
const fecha = () => {
    fechaIngresada = document.getElementById('fecha').value
    fechaActual = new Date().getFullYear()
    fechaInicio = new Date(fechaIngresada).getFullYear()
    resultado = Math.abs(fechaActual - fechaInicio)
    document.write(`Hay una diferencia de ${resultado} años entre ${fechaIngresada} y ${fechaActual}`)
};

//Calcular diferencia con const y callback
const fecha2 = (cadena) => {
    fechaActual = new Date().getFullYear()
    fechaInicio = new Date(cadena).getFullYear()

    return {
        diferencia: Math.abs(fechaActual - fechaInicio),
        fechaActual,
        fechaInicio,
    };
};

const escribir = (callback) => {
    document.write(`Hay una diferencia de ${callback.diferencia} años entre ${callback.fechaInicio} y ${callback.fechaActual}`
    );
};
