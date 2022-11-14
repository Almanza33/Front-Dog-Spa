import { Component, OnInit } from '@angular/core';
import { ServicioMascotasDetail } from '../servicioMascotas-Detail';
import { ServiciosMascotasService } from '../serviciosMascotas.service';

@Component({
  selector: 'app-serviciosMascotas-list',
  templateUrl: './serviciosMascotas-list.component.html',
  styleUrls: ['./serviciosMascotas-list.component.css']
})
export class ServiciosMascotasListComponent implements OnInit {

  constructor(private serviciosMascotasService: ServiciosMascotasService) { }
  servicioMascotas:  Array<ServicioMascotasDetail> = [];
  getServiciosMascotas(): void {
    this.serviciosMascotasService.getServicioMascotas().subscribe(servicioMascotas => this.servicioMascotas=servicioMascotas);
    };


  ngOnInit() {
    this.getServiciosMascotas
  }

}
