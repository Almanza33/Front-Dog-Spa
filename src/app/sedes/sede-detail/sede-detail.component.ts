import { Component, Input, OnInit } from '@angular/core';
import { Sedes } from '../Sedes';

@Component({
  selector: 'app-sede-detail',
  templateUrl: './sede-detail.component.html',
  styleUrls: ['./sede-detail.component.css']
})
export class SedeDetailComponent implements OnInit {

  @Input() sedeDetail!: Sedes;
  constructor() { }

  ngOnInit() {
  }

}
