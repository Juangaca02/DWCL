const empresa = {
  nombre: 'Infrico',
  direccion: 'Enpresa de lucena',
  telefono: '666666666',
  nif: '111111111K'
};

const cliente = {
  numero: '1',
  dni: '777777777P',
  nombre: 'Antonio',
  domicilio: 'Calle juego de pelota',
  cp: '14920',
  ciudad: 'Lucena',
  provincia: 'Córdoba'
};

const productos = [
  {
    descripcion: 'Pantalla',
    precio: 10,
    cantidad: 2
  },
  {
    descripcion: 'Cables',
    precio: 15,
    cantidad: 1
  }
];

const informacion = {
  importeTotal: 0,
  formaPago: 'Visa'
};

const factura = {
  empresa: empresa,
  cliente: cliente,
  productos: productos,
  informacion: informacion,

  calcularImporteTotal: function() {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
    this.informacion.importeTotal = total;
  },

  mostrarImporteTotal: function() {
    console.log(`El importe total de la factura es: ${this.informacion.importeTotal}`);
  }
};

factura.calcularImporteTotal();
factura.mostrarImporteTotal();

