import { Sedes } from "../sedes/Sedes";
import { packServicios } from "./PackServicios";
import {ServiciosDuenos} from '../serviciosDuenos/ServiciosDuenos';
import { ServicioMascotas } from "../ServiciosMascotas/servicioMascotas";



export class packServiciosDetail extends packServicios {
  serviciosMascotas: Array<ServicioMascotas>;
  serviciosDuenos: Array<ServiciosDuenos>;

  public constructor(id:number, nombre: string, precio:number, sede:Sedes, serviciosMascotas: Array<ServicioMascotas>, serviciosDuenos: Array<ServiciosDuenos>) {
   super(id, nombre, precio, sede);
   this.serviciosMascotas=serviciosMascotas;
   this.serviciosDuenos=serviciosDuenos;
  }

}
