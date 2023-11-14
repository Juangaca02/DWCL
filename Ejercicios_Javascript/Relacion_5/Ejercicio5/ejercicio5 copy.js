let parrafos = document.querySelectorAll("p");
const cambiarTodosBtn = document.getElementById("cambiarTodos");
const cambiarPrimeroBtn = document.getElementById("cambiarPrimero");
const cambiarParesBtn = document.getElementById("cambiarPares");
const cambiarImparesBtn = document.getElementById("cambiarImpares");
const anadirAlFinalBtn = document.getElementById("anadirAlFinal");
const estadoOriginalBtn = document.getElementById("estadoOriginal");

const estadoOriginal = () => {
    parrafos.forEach((parrafo) => {
        parrafo.style.color = "black";
    });
};

const cargarParrafos = () => {
    parrafos = document.querySelectorAll("p");
};

cambiarTodosBtn.addEventListener("click", () => {
    estadoOriginal();
    parrafos.forEach((parrafo) => {
        parrafo.style.color = "red";
    });
});

cambiarPrimeroBtn.addEventListener("click", () => {
    estadoOriginal();
    parrafos[0].style.color = "red";
});

cambiarParesBtn.addEventListener("click", () => {
    estadoOriginal();
    parrafos.forEach((parrafo, index) => {
        if (index % 2 === 0) {
            parrafo.style.color = "red";
        }
    });
});

cambiarImparesBtn.addEventListener("click", () => {
    estadoOriginal();
    parrafos.forEach((parrafo, index) => {
        if (index % 2 !== 0) {
            parrafo.style.color = "red";
        }
    });
});

anadirAlFinalBtn.addEventListener("click", () => {
    estadoOriginal();
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo después del segundo párrafo.";
    parrafos[3].parentNode.insertBefore(nuevoParrafo, parrafos[2]);
    cargarParrafos();
});

estadoOriginalBtn.addEventListener("click", () => {
    estadoOriginal();
});




