let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // Sumo 1 a los meses por qiue van del 0 al 11
let anio = fecha.getFullYear();

const saberCuatri = mes =>{
    if (mes >= 1 && mes <= 4) {
        return "primer";
      } else if (mes >= 5 && mes <= 8) {
        return "segundo";
      } else {
        return "tercer";
      }
}

const saberDia = () =>{
    let diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    return diasSemana[fecha.getDay()]
}

const saberMes = mes =>{
    let mesesAnio = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return mesesAnio[mes - 1];
}


let mensaje = `Estamos en el día ${dia}, ${saberDia()}, del mes ${mes}, ${saberMes(mes)}, es el ${saberCuatri(mes)} cuatrimestre del año ${anio}`;
console.log(mensaje);