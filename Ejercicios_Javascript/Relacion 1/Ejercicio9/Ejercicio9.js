
let limiteInferior = 1;
let limiteSuperior = 100;
const ran = Math.round(Math.random() * (limiteSuperior - limiteInferior));

function acierto() {
    let contador = 0;
    let n = 0;
    let cont2 = 0;
    do {
        n = prompt(`El numero esta entre ${limiteInferior} y ${limiteSuperior}`)
        if (n == ran) {
            alert("El numero que has es el correcto ");
            cont2 = 1;
        }
        if (n < ran) {
            alert("El numero que has introducio es menor");
            contador++;
            limiteInferior = n;
        }
        if (n > ran) {
            alert("El numero que has introsucio es mayor");
            contador++;
            limiteSuperior = n;
        }
    } while (contador == 10 && cont2 == 1);
    alert("Has ganado");
    if (contador = 10) {
        alert(`Has perdido. El numero era ${ran}`);
    }
    

}
acierto()