// Crear matriz 10x10 con números aleatorios entre 30 y 99
let matriz = Array.from({length: 10}, () => 
    Array.from({length: 10}, () => Math.floor(Math.random() * 70) + 30)
);

console.log("Matriz original:");
console.table(matriz);

// Crear una copia de la matriz e invertir los elementos de la diagonal principal
let matrizInvertida = JSON.parse(JSON.stringify(matriz)); // Crear una copia profunda
for(let i = 0; i < 10; i++) {
    matrizInvertida[i][i] = matriz[9-i][9-i];
}

console.log("Matriz con diagonal principal invertida:");
console.table(matrizInvertida);
