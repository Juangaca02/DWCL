class Pelicula {
    constructor(
        id,
        titulo,
        director,
        AnioEstreno,
        paisesOrigen,
        genero,
        calificacion
    ) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.AnioEstreno = AnioEstreno;
        this.paisesOrigen = paisesOrigen;
        this.genero = genero;
        this.calificacion = calificacion;
    }

    validarId(id) {
        const idRegexp = /^[A-Za-z]{2}\d{7}$/;
        if (!id.match(idRegexp)) {
            throw new Error(
                "Dni incrrecto"
            );
        }
    }

    validarTitulo(titulo) {
        const tituloRegexp = /^.{1,100}$/;
        if (!titulo.match(tituloRegexp)) {
            throw new Error(
                "Titulo incrrecto"
            );
        }
    }

    validarAnioEstreno(AnioEstreno) {
        const AnioEstrenoRegexp = /^\d{4}$/;
        if (!AnioEstreno.match(AnioEstrenoRegexp)) {
            throw new Error(
                "Año de estreno incrrecto"
            );
        }
    }

}