import { ofertaSede } from "./ofertaSede";

export class ofertaSedesDetail extends ofertaSede{
  constructor(
    oferta:string,
    precio:number
  ){
super(oferta,precio);
    }
}