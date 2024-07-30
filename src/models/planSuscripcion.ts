export class PlanSuscripcion {
    id: number;
    nombre: string;
    precio: number;
    calidadImagen: string;
    anuncios: boolean;
  
    constructor(
      id: number,
      nombre: string,
      precio: number,
      calidadImagen: string,
      anuncios: boolean = false
    ) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.calidadImagen = calidadImagen;
      this.anuncios = anuncios;
    }
  }
  