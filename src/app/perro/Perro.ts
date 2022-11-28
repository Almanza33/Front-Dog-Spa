import { HallOfFame } from "../HallOfFame/HallOfFame";

export class Perro {
  id: number;
  nombre: string;
  fotoAntes: string;
  fotoDespues: string;
  hallOfFame: HallOfFame;
  public constructor(id: number, nombre:string, fotoAntes:string, fotoDespues:string, hallOfFame: HallOfFame){
    this.id = id;
    this.nombre = nombre;
    this.fotoAntes = fotoAntes;
    this.fotoDespues = fotoDespues;
    this.hallOfFame = hallOfFame;
  }

}
