import { Component, Input, OnInit } from '@angular/core';
import { ServicioMascotas } from '../servicioMascotas';

@Component({
  selector: 'app-ServicioMascotas-detail',
  templateUrl: './ServicioMascotas-detail.component.html',
  styleUrls: ['./ServicioMascotas-detail.component.css']
})
export class ServicioMascotasDetailComponent implements OnInit {

  @Input() servicioDetail!: ServicioMascotas;
  constructor() { }

  ngOnInit() {
  }

}
