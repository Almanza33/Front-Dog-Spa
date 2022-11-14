import { ServicioMascotas } from "./servicioMascotas";

export class ServicioMascotasDetail extends ServicioMascotas{

  constructor(precio: number, nombre: string) {
    super(precio, nombre);
  }
}
