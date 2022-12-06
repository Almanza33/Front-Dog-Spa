import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProductos() {
    this.router.navigate(['/', 'producto']);

  }

  goToSedes() {
    this.router.navigate(['/', 'sedes']);
  }

  goToPacks() {
    this.router.navigate(['/', 'packs'])
  }

  goToHalls() {
    this.router.navigate(['/', 'halls'])
  }
}
