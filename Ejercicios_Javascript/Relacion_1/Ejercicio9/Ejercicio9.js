
let limiteInferior = 1;
let limiteSuperior = 100;
const ran = Math.round(Math.random() * (limiteSuperior - limiteInferior));

const acierto = () => {
    let contador = 0;
    let n = 0;
    do {
        n = prompt(`El numero esta entre ${limiteInferior} y ${limiteSuperior}`)
        if (n == ran) {
            alert("El numero que has es el correcto ");
        }
        if (n < ran) {
            alert("El numero que has introducio es menor");
            limiteInferior = n;
        }
        if (n > ran) {
            alert("El numero que has introsucio es mayor");
            limiteSuperior = n;
        }
        contador++;
    } while (n != ran && contador <= 10);
    document.write(`El numero es: ${ran}`);
    if (contador >= 10) {
        alert(`Has perdido. El numero era ${ran}`);
    }


}
acierto()