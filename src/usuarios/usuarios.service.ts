import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/usuario';
import { Pelicula } from 'src/models/pelicula';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];
  private peliculas: Pelicula[] = []; 

  constructor() {
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

    this.peliculas.push(
      new Pelicula(1, 'Toy Story', 'Animación', 1995, 'TE', 81, 'Inglés', ['Inglés'], false),
      new Pelicula(2, 'Deadpool & Wolverine', 'Comedia', 2024, 'MA18', 127, 'Inglés', ['Español'], true)
    );
  }

  reproducirPelicula(id: number, peliculaId: number): { message: string } | { error: string } {
    const usuario = this.obtenerUsuario(id);
    if (!usuario) {
      return { error: 'Usuario no existe' };
    }

    let pelicula: Pelicula | null = null;
    for (let i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id === peliculaId) {
        pelicula = this.peliculas[i];
        break;
      }
    }

    if (!pelicula) {
      return { error: 'La película no existe' };
    }

    if (pelicula.estreno && usuario.planSuscripcion !== 'Plan premium') {
      return { error: 'Su plan no permite reproducir la película' };
    }

    if (this.obtenerClasificacionEdad(pelicula.calificacion) > usuario.edad) {
      return { error: 'La película no es apta' };
    }

    usuario.historialVisualizaciones.push(pelicula);
    return { message: 'OK' };
  }

  obtenerClasificacionEdad(calificacion: "TE" | "TE+7" | "MA14" | "MA18"): number {
    switch (calificacion) {
      case 'TE':
        return 0;
      case 'TE+7':
        return 7;
      case 'MA14':
        return 14;
      case 'MA18':
        return 18;
      default:
        return 0;
    }
  }

  obtenerUsuario(id: number): Usuario | null {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        return this.usuarios[i];
      }
    }
    return null;
  }

  crearUsuario(usuario: Usuario): Usuario | null {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].correoElectronico === usuario.correoElectronico) {
        return null;
      }
    }
    usuario.id = this.usuarios.length + 1;
    this.usuarios.push(usuario);
    return usuario;
  }

  actualizarUsuario(id: number, usuario: Usuario): Usuario | null {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        this.usuarios[i].nombre = usuario.nombre;
        this.usuarios[i].correoElectronico = usuario.correoElectronico;
        this.usuarios[i].contrasena = usuario.contrasena;
        this.usuarios[i].edad = usuario.edad;
        this.usuarios[i].planSuscripcion = usuario.planSuscripcion;
        this.usuarios[i].historialVisualizaciones = usuario.historialVisualizaciones;
        this.usuarios[i].generosFavoritos = usuario.generosFavoritos;
        return this.usuarios[i];
      }
    }
    return null;
  }
}
