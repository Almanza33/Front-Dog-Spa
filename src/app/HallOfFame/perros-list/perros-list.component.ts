import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/perro/Perro';

@Component({
  selector: 'app-perros-list',
  templateUrl: './perros-list.component.html',
  styleUrls: ['./perros-list.component.css']
})
export class PerrosListComponent implements OnInit {

  //TODO
  perros: Array<Perro> = [];
  constructor() { }

  ngOnInit() {
  }

}
