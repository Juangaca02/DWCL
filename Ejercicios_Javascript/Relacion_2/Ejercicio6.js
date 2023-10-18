let num1 = 1000
let num2 = 100
let num3 = 500

const menor = (n1,n2,n3) => {
    return Math.min(n1,n2,n3)
}
document.write(`El menor de los numeros ${num1},${num2},${num3} es: ${menor(num1,num2,num3)}`)