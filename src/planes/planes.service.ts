import { Injectable } from '@nestjs/common';
import { PlanSuscripcion } from 'src/models/planSuscripcion';

@Injectable()
export class PlanesService {
  private planes: PlanSuscripcion[] = [];

  constructor() {
    
    this.planes.push(
      new PlanSuscripcion(1, 'Plan Básico', 3.000, '720p', true),
      new PlanSuscripcion(2, 'Plan Premium', 7.000, '4K', false),
    );
  }

  obtenerTodosLosPlanes(): PlanSuscripcion[] {
    return this.planes;
  }

  obtenerPlan(id: number): PlanSuscripcion {
    for (let i = 0; i < this.planes.length; i++) {
      if (this.planes[i].id === id) {
        return this.planes[i];
      }
    }
    return null;
  }
}
