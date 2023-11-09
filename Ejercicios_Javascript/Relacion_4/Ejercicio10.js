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

    validarPaisesOrigen(paisesOrigen) {
        if (!Array.isArray(paisesOrigen) || paisesOrigen.length === 0) {
            throw new Error(
                "Debe proporcionar al menos un país de origen en forma de arreglo."
            );
        }
    }

    validarGenero(genero) {
        const generosAceptados = this.getGenerosAceptados(); //Puede fallar el this con metodos statics, en ese caso usar Pelicula.getGenerosAceptados
        if (
            !Array.isArray(genero) ||
            !genero.every((g) => generosAceptados.includes(g))
        ) {
            throw new Error("Los géneros proporcionados no son válidos.");
        }
    }

    static getGenerosAceptados() {
        return [
            "Action",
            "Adult",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Film Noir",
            "Game-Show",
            "History",
            "Horror",
            "Musical",
            "Music",
            "Mystery",
            "News",
            "Reality-TV",
            "Romance",
            "Sci-Fi",
            "Short",
            "Sport",
            "Talk-Show",
            "Thriller",
            "War",
            "Western",
        ];
    }

    obtenerFichaTecnica() {
        return `ID: ${this.id} <br>
        Título: ${this.titulo} <br>
        Director: ${this.director} <br>
        Año de Estreno: ${this.añoEstreno} <br>
        Países de Origen: ${this.paisesOrigen.join(", ")} <br>
        Género: ${this.genero.join(", ")} <br>
        Calificación: ${this.calificacion} <br><br>`;
    }
}

// Ejemplo de uso:
const pelicula1 = new Pelicula(
    "AB1234567",
    "Transformers: El Último Enfrentamiento",
    "Michael Bay",
    2019,
    ["Estados Unidos"],
    ["Action", "Sci-Fi"],
    "PG-16"
);

const pelicula2 = new Pelicula(
    "CD9876543",
    "Los Vengadores: Guerra Infinita",
    "Anthony Russo, Joe Russo",
    2018,
    ["Estados Unidos", "España"],
    ["Action", "Adventure", "Fantasy"],
    "PG-16"
);

const pelicula3 = new Pelicula(
    "EF5555555",
    "Harry Potter y el Misterio de la Magia Perdida",
    "David Yates",
    2022,
    ["Reino Unido"],
    ["Adventure", "Fantasy"],
    "PG-12"
);

document.write(pelicula1.obtenerFichaTecnica());
document.write(pelicula2.obtenerFichaTecnica());
document.write(pelicula3.obtenerFichaTecnica());

const pelicula = new Pelicula(
    "1234567AB",
    "Acero Puro",
    "Pablo Motos",
    2008,
    ["Estados Unidos"],
    ["Action", "Sci-Fi"],
    "PG-13"
);

try {
    pelicula.validarId(pelicula.id);
    pelicula.validarTitulo(pelicula.titulo);
    pelicula.validarAñoEstreno(pelicula.añoEstreno);
    pelicula.validarPaisesOrigen(pelicula.paisesOrigen);
    pelicula.validarGenero(pelicula.genero);
} catch (error) {
    //console.log("Error:", error.message);
    console.error("Error:", error.message);
}