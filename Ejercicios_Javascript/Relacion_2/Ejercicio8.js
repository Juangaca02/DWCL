const frase = `Dabale arroz a la zorra el abad`

const palindromo = frase => {
    let frase1 = frase.toLowerCase().replace(/\s/g, '');
    let fraseRevertida = frase1.split('').reverse().join('');

    if (frase1 == fraseRevertida) {
        document.write(`La frase ${frase} es palindroma`)
    } else {
        document.write(`La frase ${frase} no es palindroma`)
    }
}

palindromo(frase)