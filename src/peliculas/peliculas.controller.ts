import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Pelicula } from 'src/models/pelicula'
import { PeliculasService } from './peliculas.service';

@Controller() 
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post('peliculas') 
  crearPelicula(
    @Body() pelicula: Pelicula,
    @Res() response: Response,
  ) {
    const peliculaCreada = this.peliculasService.crearPelicula(pelicula);
    if (peliculaCreada) {
      response.status(201).send(peliculaCreada);
    } else {
      response
        .status(400)
        .send({ error: 'No se pudo crear la película' });
    }
  }

  @Get('peliculas/:id')
  obtenerPeliculaPorId(@Param('id') id: number, @Res() response: Response) {
    const pelicula = this.peliculasService.obtenerPelicula(id);
    if (pelicula) {
      response.status(200).send(pelicula);
    } else {
      response.status(404).send({ error: 'Película no existe' });
    }
  }

  @Get('peliculas')
  obtenerPeliculas() {
    return this.peliculasService.obtenerTodasLasPeliculas();
  }

  @Delete('peliculas/:id')
  eliminarPelicula(@Param('id') id: number, @Res() response: Response) {
    const resultado = this.peliculasService.eliminarPelicula(id);
    if (resultado) {
      response.status(200).send({ message: 'Película eliminada' });
    } else {
      response.status(404).send({ error: 'Película no existe' });
    }
  }
}
