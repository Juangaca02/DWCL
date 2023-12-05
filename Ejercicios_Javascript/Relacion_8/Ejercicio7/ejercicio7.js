// Inicializar el juego
function iniciarJuego() {
    // Crear un tablero de 10x10
    let tableroJuego = crearTablero(10, 10);

    // Colocar barcos en el tablero
    colocarBarcos(tableroJuego);

    // Mostrar el tablero en la página
    mostrarTableroHTML(tableroJuego);
}

// Función para crear un tablero vacío
function crearTablero(filas, columnas) {
    let tablero = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push("🟦"); // '0' representa agua
        }
        tablero.push(fila);
    }
    return tablero;
}

// Función para mostrar el tablero en la página
function mostrarTableroHTML(tablero) {
    let table = document.getElementById('tablero');
    for (let i = 0; i < tablero.length; i++) {
        let row = table.insertRow();
        for (let j = 0; j < tablero[i].length; j++) {
            let cell = row.insertCell();
            cell.innerHTML = tablero[i][j];
        }
    }
}

// Función para colocar barcos en el tablero
function colocarBarcos(tablero) {
    for (let index = 0; index < 4; index++) {
        colocarBarco(tablero, '🛶', 1); // Barco grande
    }
    // Barco pequeño
    for (let index = 0; index < 3; index++) {
        colocarBarco(tablero, '🚣‍♀️', 2); // Barco grande
    }
    for (let index = 0; index < 2; index++) {
        colocarBarco(tablero, '🚤', 3); // Fregata
    }
    colocarBarco(tablero, '🛳', 4); // Portaaviones
}

// Función para colocar un barco en una posición aleatoria
function colocarBarco(tablero, tipoBarco, longitud) {
    let fila, columna, direccion;
    do {
        fila = Math.floor(Math.random() * tablero.length);
        columna = Math.floor(Math.random() * tablero[0].length);
        direccion = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    } while (!esPosicionValida(tablero, fila, columna, longitud, direccion));

    for (let i = 0; i < longitud; i++) {
        if (direccion === 'horizontal') {
            tablero[fila][columna + i] = tipoBarco;
        } else {
            tablero[fila + i][columna] = tipoBarco;
        }
    }
}

// Función para verificar si una posición es válida para colocar un barco
function esPosicionValida(tablero, fila, columna, longitud, direccion) {
    // Verificar si la posición es válida dentro de los límites del tablero
    if (
        (direccion === 'horizontal' && columna + longitud > tablero[0].length) ||
        (direccion === 'vertical' && fila + longitud > tablero.length)
    ) {
        return false;
    }

    // Verificar si la posición está rodeada de agua
    for (let i = -1; i <= longitud; i++) {
        for (let j = -1; j <= 1; j++) {
            const x = fila + i;
            const y = columna + j;

            // Verificar si la posición está dentro de los límites del tablero
            if (x >= 0 && x < tablero.length && y >= 0 && y < tablero[0].length) {
                // Verificar si hay un barco en las posiciones adyacentes
                if (tablero[x][y] !== '🟦') {
                    return false;
                }
            }
        }
    }

    return true;
}

// Iniciar el juego al cargar la página
window.onload = iniciarJuego;