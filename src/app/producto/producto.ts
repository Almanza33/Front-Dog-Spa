

import { Sedes } from "../sedes/Sedes";

export class Producto {

  id: number;
  precio: number;
  nombre: string;
  sede: Sedes;

  constructor(
    id: number,
    precio: number,
    nombre: string,
    sede: Sedes

    ) {

    this.id = id;
    this.precio = precio;
    this.nombre = nombre;
    this.sede = sede;
  }
}
