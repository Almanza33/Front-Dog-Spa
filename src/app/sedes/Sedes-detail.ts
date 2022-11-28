import { HallOfFame } from "../HallOfFame/HallOfFame";
import { Sedes } from "./Sedes";

export class SedesDetail extends Sedes{
  constructor(
    id:number,
  direccion: string,
  ciudad: string,
  telefono: number,
  horario: string,
  redesSociales: string){
super(id,direccion,ciudad,telefono,horario,redesSociales);
    }
}
