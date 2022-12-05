import { Component, OnInit, Input } from '@angular/core';
import { ServiciosDuenos } from '../ServiciosDuenos';

@Component({
  selector: 'app-serviciosDuenos-detail',
  templateUrl: './serviciosDuenos-detail.component.html',
  styleUrls: ['./serviciosDuenos-detail.component.css']
})
export class ServiciosDuenosDetailComponent implements OnInit {

  @Input() servicioDetail!: ServiciosDuenos;

  constructor() { }

  ngOnInit() {
  }

}
