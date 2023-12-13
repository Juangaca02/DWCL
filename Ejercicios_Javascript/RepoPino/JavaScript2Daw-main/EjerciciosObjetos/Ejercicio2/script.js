class Empresa {
  constructor(nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
  }
}

class Cliente {
  constructor(numero, dni, nombre, domicilio, cp, ciudad, provincia) {
    this.numero = numero
    this.dni = dni
    this.nombre = nombre
    this.domicilio = domicilio
    this.cp = cp
    this.ciudad = ciudad
    this.provincia = provincia
  }
}

class Producto {
  constructor(descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
  }
}

class Informacion {
  constructor(importeTotal, formaPago) {
    this.importeTotal = importeTotal
    this.formaPago = formaPago
  }
}

class Factura {
  constructor(empresa, cliente, productos, informacion) {
    this.empresa = empresa
    this.cliente = cliente
    this.productos = productos
    this.informacion = informacion
  }

  calcularImporteTotal() {
    let total = 0
    this.productos.forEach( producto => {
      total += producto.precio * producto.cantidad
    })
    this.informacion.importeTotal = total
  }

  mostrarImporteTotal() {
    console.log(`El importe total de la factura es: ${this.informacion.importeTotal}`)
  }
}


const empresa = new Empresa(`Infrico`, `Enpresa de lucena`, `666666666`, `111111111K`)
const cliente = new Cliente(`1`, `777777777P`, `Antonio`, `Calle juego de pelota`, `14920`, `Lucena`, `Córdoba`)
const productos = [
  new Producto(`Pantalla`, 10, 2),
  new Producto(`Cables`, 15, 1)
]
const informacion = new Informacion(0, `Visa`)

const factura = new Factura(empresa, cliente, productos, informacion)

factura.calcularImporteTotal()
factura.mostrarImporteTotal()