/*>< */
const generarApuesta = () => {
    // Genero 6 numero aleatorios del 1 al 49
    const numerosLoteria = [];
    while (numerosLoteria.length < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 49) + 1;
        //Si se genera el mismo numero, este If evita que se sobreescriba 
        if (!numerosLoteria.includes(numeroAleatorio)) {
            numerosLoteria.push(numeroAleatorio);
        }
    }
    // Obtener la tabla y limpiar su contenido
    const table = document.getElementById("tabla");
    table.innerHTML = "";

    /* */
    const matriz = [];
    let contador = 1;

    for (let i = 0; i < 7; i++) {
        matriz[i] = [];
        for (let j = 0; j < 7; j++) {
            // La primera casilla de la primera fila está vacía
            if (i === 0 && j === 0) {
                matriz[i][j] = '🎰';
            } else {
                // El resto de las casillas contienen números del 1 al 49
                numerosLoteria.includes(contador) ? (matriz[i][j] = '❌') : (matriz[i][j] = contador);
                contador++;
            }
        }
    }

    matriz.forEach(fila => {
        const filaTabla = document.createElement('tr');

        // Itera sobre cada celda en la fila actual
        fila.forEach(celda => {
            const celdaTabla = document.createElement('td');
            celdaTabla.textContent = celda;
            // Añade la celda a la fila
            filaTabla.appendChild(celdaTabla);
        });

        // Añade la fila completa a la tabla
        tabla.appendChild(filaTabla);
    });

}
