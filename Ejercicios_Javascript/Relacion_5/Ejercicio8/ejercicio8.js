function mostrartexto() {
    const elemento = document.getElementById("enlace");
    if (elemento.href == "http://www.as.com/") {
        elemento.href = "http://www.marca.com/";
        elemento.innerHTML = "diario marca";
    } else {
        elemento.href = "http://www.as.com/";
        elemento.innerHTML = "diario as";
    }
}