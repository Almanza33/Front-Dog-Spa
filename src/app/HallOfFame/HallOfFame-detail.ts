import { Perro } from "../perro/Perro";
import { Sedes } from "../sedes/Sedes";
import { HallOfFame } from "./HallOfFame";

export class HallOfFameDetail extends HallOfFame {
  perros: Array<Perro>
  constructor(id:number,
    nombre:string,
    sede:Sedes,
    perros:Array<Perro>)
    {
      super(id,nombre,sede);
      this.perros = perros;
    }

}
