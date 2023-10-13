let cont = 0;
let array = [];
let suma = 0;
do {
    let num = prompt(`Dame un numero`);
    cont++;
    array.push(num);
} while (cont < 10);
alert(array);
for (let i = 0; i < array.length; i++) {
    suma = suma + parseInt(array[i])
    document.write(array[i])
}
document.write(suma)
