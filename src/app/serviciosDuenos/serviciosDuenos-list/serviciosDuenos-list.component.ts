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

  ngOnInit() {
    this.getServiciosDuenos();
  }

}
