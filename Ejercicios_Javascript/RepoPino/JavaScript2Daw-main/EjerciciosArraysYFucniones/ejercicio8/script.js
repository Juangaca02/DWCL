let str = `ojo rojo`

const comprobarPalindromo = str =>{
    const sinEspacios = str.replace(/\s/,'')
    let inversa = sinEspacios.split('').reverse().join('')

    if (inversa == sinEspacios) {
        document.write(`${str} es palindromo`)
    }else{
        document.write(`${str} no es palindromo`)
    }
}

comprobarPalindromo(str)


