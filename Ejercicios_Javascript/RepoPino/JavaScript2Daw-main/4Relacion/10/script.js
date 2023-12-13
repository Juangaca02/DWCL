class Pelicula {
  constructor(
    id,
    titulo,
    director,
    añoEstreno,
    paisesOrigen,
    genero,
    calificacion
  ) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.añoEstreno = añoEstreno;
    this.paisesOrigen = paisesOrigen;
    this.genero = genero;
    this.calificacion = calificacion;
  }

  validarId(id) {
    const idRegex = /^[A-Za-z]{2}\d{7}$/;
    if (!id.match(idRegex)) {
      throw new Error(
        "El ID de la película no cumple con el formato requerido."
      );
    }
  }

  validarTitulo(titulo) {
    if (titulo.length > 100) {
      throw new Error(
        "El título de la película no puede tener más de 100 caracteres."
      );
    }
  }

  validarAñoEstreno(añoEstreno) {
    if (!Number.isInteger(añoEstreno) || añoEstreno.toString().length !== 4) {
      throw new Error(
        "El año de estreno debe ser un número entero de 4 dígitos."
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
    return `ID: ${this.id}
  Título: ${this.titulo}
  Director: ${this.director}
  Año de Estreno: ${this.añoEstreno}
  Países de Origen: ${this.paisesOrigen.join(", ")}
  Género: ${this.genero.join(", ")}
  Calificación: ${this.calificacion}`;
  }
}

// Ejemplo de uso:
const pelicula1 = new Pelicula(
  "AB1234567",
  "Titanic",
  "James Cameron",
  1997,
  ["Estados Unidos"],
  ["Drama", "Romance"],
  "PG-13"
);

const pelicula2 = new Pelicula(
  "CD9876543",
  "Avatar",
  "James Cameron",
  2009,
  ["Estados Unidos", "España"],
  ["Action", "Adventure", "Sci-Fi"],
  "PG-13"
);

const pelicula3 = new Pelicula(
  "EF5555555",
  "Pulp Fiction",
  "Quentin Tarantino",
  1994,
  ["Estados Unidos"],
  ["Crime", "Drama"],
  "R"
);

console.log(pelicula1.obtenerFichaTecnica());
console.log(pelicula2.obtenerFichaTecnica());
console.log(pelicula3.obtenerFichaTecnica());

const pelicula = new Pelicula(
  "ABC1234567",
  "Título de la película",
  "Nombre del director",
  202,
  ["País A", "País B"],
  ["Action", "Adventure"],
  "P3"
);

try {
  pelicula.validarId(pelicula.id);
  pelicula.validarTitulo(pelicula.titulo);
  pelicula.validarAñoEstreno(pelicula.añoEstreno);
  pelicula.validarPaisesOrigen(pelicula.paisesOrigen);
  pelicula.validarGenero(pelicula.genero);
} catch (error) {
  console.error("Error:", error.message);
}
