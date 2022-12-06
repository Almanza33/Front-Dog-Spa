import { Component, OnInit } from '@angular/core';
import { packServiciosDetail } from '../PackServicios-detail';
import { PackServiciosService } from '../packServicios.service';

@Component({
  selector: 'app-packServicios-list',
  templateUrl: './packServicios-list.component.html',
  styleUrls: ['./packServicios-list.component.css']
})
export class PackServiciosListComponent implements OnInit {

  packs: Array<packServiciosDetail> = [];
  selected: Boolean = false;
  selectedPack!: packServiciosDetail;

  constructor(private packService: PackServiciosService) { }

  onSelected(packServiciosdetail: packServiciosDetail): void {
    this.selected = true;
    this.selectedPack = packServiciosdetail;
  }

  getPacks(): void {
    this.packService.getPacks().subscribe((packs) => {
      this.packs = packs.slice(1,packs.length);
    });
  }

  ordenar(tipo: number): void{
    this.packService.getPacks().subscribe((packs) => {
      if (tipo==1){
        this.packs = packs.slice(1,packs.length).sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
      }else if(tipo==2){
        this.packs = packs.slice(1,packs.length).sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0));
      }
    });
  }

  ngOnInit() {
    this.getPacks();
  }

}
