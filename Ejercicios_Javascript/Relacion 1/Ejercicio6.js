function mostrarTablaMulti(n) {
    for (let i = 1; i <= 10; i++) {
        let a = n * i
        document.write(`${n} x ${i} = ${a}<br> `);
    }
}