import { Injectable } from '@nestjs/common';
import { Pelicula } from 'src/models/pelicula';
import { Usuario } from 'src/models/usuario';

@Injectable()
export class SugerenciasPeliculasService {
  private peliculas: Pelicula[] = [];
  private usuarios: Usuario[] = []; 

  constructor() {
    this.peliculas.push(
      new Pelicula(1, 'Toy Story', 'Animación', 1995, 'TE', 81, 'Inglés', ['Inglés'], false),
      new Pelicula(2, 'Deadpool & Wolverine', 'Comedia', 2024, 'MA18', 127, 'Inglés', ['Español'], true)
    );

    this.usuarios.push(
      new Usuario(
        1,
        'usuario1',
        'usuario1@mail.com',
        '1234',
        7,
        'Plan premium',
        [],
        ['Animación', 'Fantasía']
      ),
    );
  }

  sugerirPeliculasPorUsuario(usuarioId: number): Pelicula[] | { error: string } {
    let usuario: Usuario;
    
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === usuarioId) {
        usuario = this.usuarios[i];
        break;
      }
    }

    if (!usuario) {
      return { error: 'Usuario no existe' };
    }

    const peliculasSugeridas: Pelicula[] = [];
    
   
    for (let i = 0; i < this.peliculas.length; i++) {
      const pelicula = this.peliculas[i];
      if (usuario.generosFavoritos.indexOf(pelicula.genero) !== -1) {
        peliculasSugeridas.push(pelicula);
      }
    }

    return peliculasSugeridas;
  }
}
