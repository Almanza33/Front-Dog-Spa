import { HallOfFame } from "../HallOfFame/HallOfFame";

export class Sedes {
  id:number;
  direccion: string;
  ciudad: string;
  telefono: number;
  horario: string;
  redesSociales: string;

  constructor(
    id:number,
    direccion: string,
    ciudad: string,
    telefono: number,
    horario: string,
    redesSociales: string,
  ) {
    this.id = id;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.horario = horario;
    this.redesSociales = redesSociales;
  }
}
