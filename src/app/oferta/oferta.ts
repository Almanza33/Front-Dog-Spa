import { Sedes } from "../sedes/Sedes";

export class Oferta {
  id:number;
  descripcion:string;
  precio:number;
  nombre:string;
  sede:Sedes
  constructor(
    id:number,
    descripcion:string,
    precio:number,
    nombre:string,
    sede:Sedes
  ) {
    this.id=id;
    this.descripcion=descripcion;
    this.precio=precio;
    this.nombre=nombre;
    this.sede=sede;
  }
}
