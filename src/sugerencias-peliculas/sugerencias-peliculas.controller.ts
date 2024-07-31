import { Controller, Get, Param, Res } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly peliculasService: PeliculasService
  ) {}

  @Get(':id/sugerir-peliculas')
  sugerirPeliculasPorUsuario(
    @Param('id') id: number,
    @Res() response: Response,
  ) {
    const resultado = this.peliculasService.sugerirPeliculasPorUsuario(id);
    if ('error' in resultado) {
      response.status(404).send(resultado);
    } else {
      response.status(200).send(resultado);
    }
  }
}
