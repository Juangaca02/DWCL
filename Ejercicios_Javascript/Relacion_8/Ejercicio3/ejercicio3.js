/*>< */

const calculoSalario = () => {
    const mensajeDiv = document.getElementById("mensaje")
    const nombre = document.getElementById("nombre").value
    const edad = document.getElementById("edad").value
    let salario = parseFloat(document.getElementById("salario").value)

    if (salario > 2000) {
        salario = salario;
    } else {
        if (salario < 2000 || salario > 1000) {
            if (edad > 50) {
                salario = salario * 1.1
            } else {
                salario = salario * 1.05
            }
        } else {
            if (salario < 1000) {
                if (edad > 50 || edad < 60) {
                    salario = salario * 1.15
                } else {
                    if (edad < 50) {
                        salario = salario * 1.075
                    } else {
                        salario = salario * 1.2
                    }
                }
            }
        }
    }
    mensajeDiv.textContent = `El salario de ${nombre} es de ${salario}`
}
