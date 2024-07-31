import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SugerenciasPeliculasController } from './sugerencias-peliculas/sugerencias-peliculas.controller';
import { SugerenciasPeliculasService } from './sugerencias-peliculas/sugerencias-peliculas.service';

@Module({
  imports: [],
  controllers: [AppController, SugerenciasPeliculasController],
  providers: [AppService, SugerenciasPeliculasService],
})
export class AppModule {}
