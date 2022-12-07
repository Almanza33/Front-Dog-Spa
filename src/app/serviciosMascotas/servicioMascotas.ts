import { Sedes } from "../sedes/Sedes";
import { packServicios } from "../packServicios/PackServicios";
export class ServicioMascotas {
  id: number;
  nombre: string;
  restricciones: string;
  precio: number;
  sede:Sedes;
  pack:packServicios;

  public constructor(id:number, nombre: string, restricciones: string, precio:number, sede:Sedes, pack: packServicios) {
    this.id = id;
    this.nombre = nombre;
    this.restricciones = restricciones;
    this.precio = precio;
    this.sede = sede;
    this.pack = pack;
  }
}
