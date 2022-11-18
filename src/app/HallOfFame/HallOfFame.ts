import { Perro } from "../perro/Perro";
import { Sedes } from "../sedes/Sedes";
export class HallOfFame {
  id: number;
  nombre: string;
  sede:Sedes;

  public constructor(id:number, nombre: string, sede:Sedes) {
    this.id = id;
    this.nombre = nombre;
    this.sede = sede;
  }

}
