import { Component, OnInit } from '@angular/core';
import { packServicios } from '../PackServicios';
import { PackServiciosService } from '../packServicios.service';

@Component({
  selector: 'app-packServicios-list',
  templateUrl: './packServicios-list.component.html',
  styleUrls: ['./packServicios-list.component.css']
})
export class PackServiciosListComponent implements OnInit {

  packs: Array<packServicios> = [];

  constructor(private packService: PackServiciosService) { }

  getPacks(): void {
    this.packService.getPacks().subscribe((packs) => {
      this.packs = packs;
    });
  }

  ngOnInit() {
    this.getPacks();
  }

}
