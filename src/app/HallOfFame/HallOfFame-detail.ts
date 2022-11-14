import { Perro } from "../perro/Perro";
import { HallOfFame } from "./HallOfFame";

export class HallOfFameDetail extends HallOfFame {
  perros: Array<Perro>
  constructor(id:number,
    nombre:string,
    perros:Array<Perro>)
    {
      super(id,nombre);
      this.perros = perros;
    }

}
