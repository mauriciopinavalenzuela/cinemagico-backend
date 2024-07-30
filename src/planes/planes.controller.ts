import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { PlanesService } from './planes.service';

@Controller()
export class PlanesController {
  constructor(private readonly planesService: PlanesService) {}

  @Get('planes/:id')
  obtenerPlanPorId(@Param('id') id: number, @Res() response: Response) {
    const plan = this.planesService.obtenerPlan(id);
    if (plan) {
      response.status(200).send(plan);
    } else {
      response.status(404).send({ error: 'EL plan no existe' });
    }
  }

  @Get('planes')
  obtenerPlanes(@Res() response: Response) {
    const planes = this.planesService.obtenerTodosLosPlanes();
    response.status(200).send(planes);
  }
}
