const tabla1 = document.getElementById("tabla1");
const tabla2 = document.getElementById("tabla2");

function mostrarMatriz(matriz, tabla) {
    tabla.innerHTML = '';
    for (let i = 0; i < matriz.length; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < matriz[i].length; j++) {
            let cell = document.createElement('td');
            cell.textContent = matriz[i][j];
            row.appendChild(cell);
        }
        tabla.appendChild(row);
    }
}

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearMatriz(filas, columnas, min, max) {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(generarNumeroAleatorio(min, max));
        }
        matriz.push(fila);
    }
    return matriz;
}
function invertirDiagonalPrincipal(matriz) {
    const longitud = matriz.length;

    for (let i = 0; i < longitud / 2; i++) {
        const temp = matriz[i][i];
        matriz[i][i] = matriz[longitud - i - 1][longitud - i - 1];
        matriz[longitud - i - 1][longitud - i - 1] = temp;
    }
}

const matrizOriginal = crearMatriz(10, 10, 30, 99);

mostrarMatriz(matrizOriginal, tabla1);

const matrizInvertida = [...matrizOriginal];
invertirDiagonalPrincipal(matrizInvertida);

mostrarMatriz(matrizInvertida, tabla2);
