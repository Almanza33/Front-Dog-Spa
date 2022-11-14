import { Perro } from "../perro/Perro";
import { Sedes } from "../sedes/Sedes";
export class HallOfFame {
  id: number;
  nombre: string;
  //sede:Sedes;

  public constructor(id:number, nombre: string) {
    this.id = id;
    this.nombre = nombre;

  }

}
