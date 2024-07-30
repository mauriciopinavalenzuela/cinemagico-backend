class Pelicula {
    id: number;
    titulo: string;
    genero: "Animación" | "Fantasía" | "Drama" | "Comedia" | "Aventura" | "Terror" | "Ciencia Ficción";
    anioEstreno: number;
    calificacion: "TE" | "TE+7" | "MA14" | "MA18";
    duracion: number;
    idiomaOriginal: string;
    subtitulosDisponibles: string[];
    estreno: boolean;
  
    constructor(
      id: number,
      titulo: string,
      genero: "Animación" | "Fantasía" | "Drama" | "Comedia" | "Aventura" | "Terror" | "Ciencia Ficción",
      anioEstreno: number,
      calificacion: "TE" | "TE+7" | "MA14" | "MA18",
      duracion: number,
      idiomaOriginal: string,
      subtitulosDisponibles: string[] = [],
      estreno: boolean = false
    ) {
      this.id = id;
      this.titulo = titulo;
      this.genero = genero;
      this.anioEstreno = anioEstreno;
      this.calificacion = calificacion;
      this.duracion = duracion;
      this.idiomaOriginal = idiomaOriginal;
      this.subtitulosDisponibles = subtitulosDisponibles;
      this.estreno = estreno;
    }
  }
  