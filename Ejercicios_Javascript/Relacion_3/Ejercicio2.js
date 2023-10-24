class Empresa {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.nif = nif
    }
}

class Cliente {
    constructor(nCliente, dni, nombre, domicilio, cp, ciudad, provincia) {
        this.nCliente = nCliente
        this.dni = dni
        this.nombre = nombre
        this.domicilio = domicilio
        this.cp = cp
        this.ciudad = ciudad
        this.provincia = provincia
    }
}

class ListaProductos {
    constructor(descripción, precio, cantidad) {
        this.descripción = descripción
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
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad
        })
        this.informacion.importeTotal = total
    }

    mostrarImporteTotal() {
        console.log(`El importe total de la factura es: ${this.informacion.importeTotal}`)
        document.write(`El importe total de la factura es: ${this.informacion.importeTotal}`)
    }
}

const empresa = new Empresa('TechCorp', 'Calle de las Tecnologías 123', '912345678', 'A12345678')
const cliente = new Cliente('001', '12345678A', 'Juan Pérez', 'Calle de las Flores 123', '28001', 'Madrid', 'Madrid')
const productos = [
    new ListaProductos(`Pantalla`, 10, 2),
    new ListaProductos(`Cables`, 15, 1)
]
const informacion = new Informacion(0, `Visa`)

const factura = new Factura(empresa, cliente, productos, informacion)

factura.calcularImporteTotal()
factura.mostrarImporteTotal()

