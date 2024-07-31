import { Test, TestingModule } from '@nestjs/testing';
import { SugerenciasPeliculasController } from './sugerencias-peliculas.controller';

describe('SugerenciasPeliculasController', () => {
  let controller: SugerenciasPeliculasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SugerenciasPeliculasController],
    }).compile();

    controller = module.get<SugerenciasPeliculasController>(SugerenciasPeliculasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
