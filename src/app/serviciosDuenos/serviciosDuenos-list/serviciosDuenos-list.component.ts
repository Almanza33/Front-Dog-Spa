import { Component, OnInit } from '@angular/core';
import { ServicioDuenosService } from '../servicioDuenos.service';
import { ServiciosDuenos } from '../ServiciosDuenos';

@Component({
  selector: 'app-serviciosDuenos-list',
  templateUrl: './serviciosDuenos-list.component.html',
  styleUrls: ['./serviciosDuenos-list.component.css']
})
export class ServiciosDuenosListComponent implements OnInit {

  selected: Boolean = false;
  selectedService!: ServiciosDuenos;
  serviciosDuenos: Array<ServiciosDuenos> = [];

  constructor(private servicioDuenosService: ServicioDuenosService) { }

  onSelected(servicioDuenos: ServiciosDuenos): void {
    this.selected = true;
    this.selectedService = servicioDuenos;
  }

  getServiciosDuenos(): void {
    this.servicioDuenosService.getServiciosDuenos().subscribe((serviciosDuenos) => {
      this.serviciosDuenos = serviciosDuenos;
    });
  }

  ordenar(tipo: number): void{
    this.servicioDuenosService.getServiciosDuenos().subscribe((servicio) => {
      if (tipo==1){
        this.serviciosDuenos = servicio.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
      }else if(tipo==2){
        this.serviciosDuenos = servicio.sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0));
      }
    });
  }

  ngOnInit() {
    this.getServiciosDuenos();
  }

}
