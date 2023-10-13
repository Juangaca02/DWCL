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

class Factura {
    constructor(importeTotal, pago) {
        this.importeTotal = importeTotal
        this.pago = pago
    }

    calculartotal() {
        let importeTotal = 0
        for (let producto of listaProduc) {
            importeTotal += producto.precio * producto.cantidad
        }
    }

    mostrartotal(){
        console.log(`El importe total de la factura es: ${this.informacion.importeTotal}`)
    }

}

let empresa = new Empresa('TechCorp', 'Calle de las Tecnologías 123', '912345678', 'A12345678')

let cliente = new Cliente('001', '12345678A', 'Juan Pérez', 'Calle de las Flores 123', '28001', 'Madrid', 'Madrid')

let listaProduc = [
    new ListaProductos('Pino', 10, 5),
    new ListaProductos('Aguayo', 20, 3),
    new ListaProductos('Adri', 30, 2)
]



let factura = new Factura(importeTotal, 'Efectivo')

document.write(Factura.this.im)








