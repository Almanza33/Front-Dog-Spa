import { Component, OnInit } from '@angular/core';
import { ServicioMascotas } from '../servicioMascotas';

import { ServicioMascotasService } from '../ServicioMascotas.service';

@Component({
  selector: 'app-ServicioMascotas-list',
  templateUrl: './ServicioMascotas-list.component.html',
  styleUrls: ['./ServicioMascotas-list.component.css']
})
export class ServicioMascotasListComponent implements OnInit {

  selected: Boolean = false;
  selectedService!: ServicioMascotas;
  servicioMascotas: Array<ServicioMascotas> = [];

  constructor(private servicioMascotasService: ServicioMascotasService) { }

  onSelected(servicioMascotas: ServicioMascotas): void {
    this.selected = true;
    this.selectedService = servicioMascotas;
  }

  getServicioMascotas(): void {
    this.servicioMascotasService.getServiciosMascotas().subscribe((servicioMascotas) => {
      this.servicioMascotas = servicioMascotas;
    });
  }

  ordenar(tipo: number): void{
    this.servicioMascotasService.getServiciosMascotas().subscribe((servicio) => {
      if (tipo==1){
        this.servicioMascotas = servicio.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
      }else if(tipo==2){
        this.servicioMascotas = servicio.sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0));
      }
    });
  }

  ngOnInit() {
    this.getServicioMascotas();
  }
}
