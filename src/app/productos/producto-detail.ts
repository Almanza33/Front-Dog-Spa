import { Producto } from "./producto";


export class ProductosDetail extends Producto{

  constructor(precio: number, nombre: string) {
    super(precio, nombre);
  }
}
