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

  ngOnInit() {
    this.getServicioMascotas();
  }
}
