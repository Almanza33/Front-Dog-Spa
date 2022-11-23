import { Sedes } from "../sedes/Sedes";

export class packServicios {
  id: number;
  nombre: string;
  precio: number;
  sede:Sedes;

  public constructor(id:number, nombre: string, precio:number, sede:Sedes) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.sede = sede;
  }

}
