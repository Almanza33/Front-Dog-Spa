import { HallOfFame } from "../HallOfFame/HallOfFame";

export class Perro {
  id: number;
  nombre: string;
  fotoAntes: string;
  fotodespues: string;
  hallOfFame: HallOfFame;
  public constructor(id: number, nombre:string, fotoAntes:string, fotodespues:string, hallOfFame: HallOfFame){
    this.id = id;
    this.nombre = nombre;
    this.fotoAntes = fotoAntes;
    this.fotodespues = fotodespues;
    this.hallOfFame = hallOfFame;
  }

}
