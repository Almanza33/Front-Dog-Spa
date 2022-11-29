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

  constructor(private packService: PackServiciosService) { }

  getPacks(): void {
    this.packService.getPacks().subscribe((packs) => {
      this.packs = packs.slice(1,packs.length);
    });
  }

  ngOnInit() {
    this.getPacks();
  }

}
