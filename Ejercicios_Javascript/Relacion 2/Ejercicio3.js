
let array = []
let suma = 0;
document.write("Los multiplos de 11 del 0 al 3000 <br>")
for (let i = 0; i < 3000; i += 11) {
    document.write(i+" ")
    array.push(i)
    suma += i
}
document.write("<br>La suma es : "+suma)