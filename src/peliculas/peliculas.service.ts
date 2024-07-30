import { Injectable } from '@nestjs/common';
import { Pelicula } from 'src/models/pelicula';

@Injectable()
export class PeliculasService {
  private peliculas: Pelicula[] = [];

  constructor() {
    this.peliculas.push(
      new Pelicula(
        1,
        'Harry Potter y la piedra filosofal',
        'Fantasía',
        2001,
        'TE+7',
        152,
        'Inglés',
        ['Español', 'Francés', 'Alemán'],
        false
      ),
      new Pelicula(
        2,
        'El juego del miedo',
        'Terror',
        2004,
        'MA14',
        117,
        'Inglés',
        ['Español', 'Alemán'],
        false
      )
    );
  }

  obtenerTodasLasPeliculas(genero?: string): Pelicula[] {
    if (genero) {
      const peliculasFiltradas: Pelicula[] = [];
      for (let i = 0; i < this.peliculas.length; i++) {
        if (this.peliculas[i].genero === genero) {
          peliculasFiltradas.push(this.peliculas[i]);
        }
      }
      return peliculasFiltradas;
    }
    return this.peliculas;
  }

  obtenerPelicula(id: number): Pelicula {
    for (let i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id === id) {
        return this.peliculas[i];
      }
    }
    return null;
  }

  crearPelicula(pelicula: Pelicula): Pelicula {
    for (let i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id === pelicula.id) {
        return null; 
      }
    }
    this.peliculas.push(pelicula);
    return pelicula;
  }

  eliminarPelicula(id: number): boolean {
    for (let i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id === id) {
        this.peliculas.splice(i, 1); 
        return true;
      }
    }
    return false;
  }
}
