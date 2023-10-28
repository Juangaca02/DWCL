const eliminarConRepalceAll = () => {
    const texto = document.getElementById("textoInput").value
    const subcadena = document.getElementById("elminiar").value
    const subcadena2 = document.getElementById("añadir").value
    const solucion = texto.replaceAll(subcadena, subcadena2)
    document.getElementById("resultado").textContent = solucion;
};
