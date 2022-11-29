import { Oferta } from "./oferta";
import { Sedes } from "../sedes/Sedes";

export class OfertaDetail extends Oferta {
  cliente: Array<Sedes> = [];
  constructor(
    id:number,
    descripcion:string,
    precio:number,
    nombre:string,
    sede:Sedes,
    cliente: Array<Sedes>
  )
  {
    super(id, descripcion, precio, nombre, sede);
    this.cliente=cliente;
  }
}
