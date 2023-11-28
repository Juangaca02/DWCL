const enviar = () => {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;
    const mensajeDiv = document.getElementById("mensaje");

    if (usuario === "admin" && clave === "1234") {
        mensajeDiv.textContent = "Bienvenidos al sistema";
    } else {
        mensajeDiv.textContent = "Usuario y/o contraseña incorrecta";
    }
}


const limpiar = () => {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("mensaje").textContent = "";
}

