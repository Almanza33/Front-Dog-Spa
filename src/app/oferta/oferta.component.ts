import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta';
import { OfertaService } from './oferta.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  ofertas: Array<Oferta> = [];
  selected: Boolean = false;
  selectedOferta!: Oferta;

  constructor(private ofertaService: OfertaService) { }

  getOfertas():void{
    this.ofertaService.getOfertas().subscribe((ofertas) =>{
      this.ofertas = ofertas;
    });
  }

  onSelected(oferta: Oferta): void{
    this.selected = true;
    this.selectedOferta = oferta;
  }

  ngOnInit() {
    this.getOfertas();
  }

}
