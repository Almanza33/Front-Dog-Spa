import { Component, OnInit } from '@angular/core';
import { OfertaDetail } from '../oferta-detail';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  ofertas: Array<OfertaDetail> = [];
  selected: Boolean = false;
  selectedOferta!: OfertaDetail;
  p: number = 1;
  searchedOferta: any;

  constructor(private ofertaService: OfertaService) { }

  getOfertas(): void {
    this.ofertaService.getOfertas().subscribe({next: ofertas => this.ofertas = ofertas , error: e => console.error(e)});
  }

  onSelected(oferta: OfertaDetail): void {
    this.selected = true;
    this.selectedOferta = oferta;
  }

  ngOnInit() {
    this.getOfertas();
  }

}

