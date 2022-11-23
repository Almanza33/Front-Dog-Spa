import { Sedes } from "../sedes/Sedes";
import { packServicios } from "../packServicios/PackServicios";

export class ServiciosDuenos {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  sede:Sedes;
  pack:packServicios;

  public constructor(id:number, nombre: string, descripcion: string, precio:number, sede:Sedes, pack: packServicios) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.sede = sede;
    this.pack = pack;
  }

}
