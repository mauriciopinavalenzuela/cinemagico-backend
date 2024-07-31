import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { PeliculasService } from './peliculas.service'; 
import { Response } from 'express';
import { Usuario } from 'src/models/usuario';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly peliculasService: PeliculasService 
  ) {}

  @Post()
  registrarUsuario(
    @Body() usuario: Usuario,
    @Res() response: Response,
  ) {
    const usuarioLocal = this.usuariosService.crearUsuario(usuario);
    if (usuarioLocal) {
      response.status(201).send(usuarioLocal);
    } else {
      response
        .status(400)
        .send({ error: 'Ya existe un usuario con este correo' });
    }
  }

  @Get(':id')
  obtenerUsuarioPorId(@Param('id') id: number, @Res() response: Response) {
    const usuario = this.usuariosService.obtenerUsuario(id);
    if (usuario) {
      response.status(200).send(usuario);
    } else {
      response.status(404).send({ error: 'Usuario no existe' });
    }
  }

  @Put(':id')
  actualizarUsuario(
    @Param('id') id: number,
    @Body() usuario: Usuario,
    @Res() response: Response,
  ) {
    const usuarioActualizado = this.usuariosService.actualizarUsuario(id, usuario);
    if (usuarioActualizado) {
      response.status(200).send(usuarioActualizado);
    } else {
      response.status(404).send({ error: 'Usuario no encontrado' });
    }
  }

  @Post(':id/reproducir/:peliculaId')
  reproducirPelicula(
    @Param('id') id: number,
    @Param('peliculaId') peliculaId: number,
    @Res() response: Response,
  ) {
    const resultado = this.peliculasService.reproducirPelicula(id, peliculaId);
    response.status(200).send(resultado);
  }
}
