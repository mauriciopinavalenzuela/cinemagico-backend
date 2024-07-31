import { Test, TestingModule } from '@nestjs/testing';
import { SugerenciasPeliculasService } from './sugerencias-peliculas.service';

describe('SugerenciasPeliculasService', () => {
  let service: SugerenciasPeliculasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SugerenciasPeliculasService],
    }).compile();

    service = module.get<SugerenciasPeliculasService>(SugerenciasPeliculasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
