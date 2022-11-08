export class Sedes {
  direccion: string;
  ciudad: string;
  telefono: number;
  horario: string;
  redesSociales: string;

  constructor(
    direccion: string,
    ciudad: string,
    telefono: number,
    horario: string,
    redesSociales: string,
  ) {
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.horario = horario;
    this.redesSociales = redesSociales;
  }
}
