import { Component, OnInit, Input } from '@angular/core';
import { packServiciosDetail } from '../PackServicios-detail';

@Component({
  selector: 'app-pack-detail',
  templateUrl: './pack-detail.component.html',
  styleUrls: ['./pack-detail.component.css']
})
export class PackDetailComponent implements OnInit {

  @Input() packDetail!: packServiciosDetail;

  constructor() { }

  ngOnInit() {
  }

}
