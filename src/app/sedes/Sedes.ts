import { HallOfFame } from "../HallOfFame/HallOfFame";

export class Sedes {
  id:number;
  direccion: string;
  ciudad: string;
  telefono: number;
  horario: string;
  redesSociales: string;
  hallOfFame: HallOfFame;

  constructor(
    id:number,
    direccion: string,
    ciudad: string,
    telefono: number,
    horario: string,
    redesSociales: string,
    hallOfFame: HallOfFame
  ) {
    this.id = id;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.horario = horario;
    this.redesSociales = redesSociales;
    this.hallOfFame = hallOfFame;
  }
}
