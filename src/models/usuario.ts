import { PlanSuscripcion } from './planSuscripcion'; 
import { Pelicula } from './pelicula';

export class Usuario {
    id: number;
    nombre: string;
    correoElectronico: string;
    contrasena: string;
    edad: number;
    planSuscripcion: PlanSuscripcion;
    historialVisualizaciones: Pelicula[];
    generosFavoritos: ("Animación" | "Fantasía" | "Drama" | "Comedia" | "Aventura" | "Terror" | "Ciencia Ficción")[];
  
    constructor(
      id: number,
      nombre: string,
      correoElectronico: string,
      contrasena: string,
      edad: number,
      planSuscripcion: PlanSuscripcion,
      historialVisualizaciones: Pelicula[] = [],
      generosFavoritos: ("Animación" | "Fantasía" | "Drama" | "Comedia" | "Aventura" | "Terror" | "Ciencia Ficción")[] = []
    ) {
      this.id = id;
      this.nombre = nombre;
      this.correoElectronico = correoElectronico;
      this.contrasena = contrasena;
      this.edad = edad;
      this.planSuscripcion = planSuscripcion;
      this.historialVisualizaciones = historialVisualizaciones;
      this.generosFavoritos = generosFavoritos;
    }
  }
  