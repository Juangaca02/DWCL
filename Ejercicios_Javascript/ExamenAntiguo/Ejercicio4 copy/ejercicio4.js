// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear una matriz de tamaño específico y llenarla con números aleatorios
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

// Función para imprimir una matriz en la consola
function mostrarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

// Función para invertir los elementos de la diagonal principal de una matriz
function invertirDiagonalPrincipal(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    for (let i = 0; i < filas; i++) {
        for (let j = i + 1; j < columnas; j++) {
            // Intercambiar elementos diagonalmente opuestos
            const temp = matriz[i][j];
            matriz[i][j] = matriz[j][i];
            matriz[j][i] = temp;
        }
    }
}

function invertirOtraDiagonal(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (i + j === filas - 1 && i !== j) {
                // Intercambiar elementos diagonalmente opuestos
                const temp = matriz[i][j];
                matriz[i][j] = matriz[j][i];
                matriz[j][i] = temp;
            }
        }
    }
}

// Crear matriz original
const matrizOriginal = crearMatriz(10, 10, 30, 99);

// Mostrar matriz original
console.log("Matriz Original:");
mostrarMatriz(matrizOriginal);

// Crear matriz invertida
const matrizInvertida = [...matrizOriginal]; // Copiar la matriz original para no modificarla directamente
invertirDiagonalPrincipal(matrizInvertida);

// Mostrar matriz invertida
console.log("\nMatriz Invertida:");
mostrarMatriz(matrizInvertida);

