
const multiplosDeOnce = []

for (let i = 11; i < 3000; i += 11) {
  multiplosDeOnce.push(i)
}

document.write(`Múltiplos de 11 menores de 3000:<br>`)

const sumaDeMultiplos = multiplosDeOnce.reduce((total, numero) => total + numero, 0)

document.write(`La suma de los múltiplos de 11 es: ${sumaDeMultiplos}`)
