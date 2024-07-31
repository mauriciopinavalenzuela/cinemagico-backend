import { Pelicula } from './pelicula';

export type PlanSuscripcion = 'Plan premium' | ' Plan estandar' | 'Plan basico';

export class Usuario {
  id: number;
  nombre: string;
  correoElectronico: string;
  contrasena: string;
  edad: number;
  planSuscripcion: PlanSuscripcion;
  historialVisualizaciones: Pelicula[];
  generosFavoritos: ('Animación' | 'Acción' | 'Fantasía' | 'Drama' | 'Comedia' | 'Aventura' | 'Terror' | 'Ciencia Ficción')[];

  constructor(
    id: number,
    nombre: string,
    correoElectronico: string,
    contrasena: string,
    edad: number,
    planSuscripcion: PlanSuscripcion,
    historialVisualizaciones: Pelicula[] = [],
    generosFavoritos: ('Animación' | 'Acción' | 'Fantasía' | 'Drama' | 'Comedia' | 'Aventura' | 'Terror' | 'Ciencia Ficción')[] = []
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

  obtenerPlanActual(): string {
    return this.planSuscripcion;
  }
}
