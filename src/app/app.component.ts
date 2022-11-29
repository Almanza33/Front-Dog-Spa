import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }
  goToSedes() {
    this.router.navigate(['/', 'sedes']);
  }
  goToPerro() {
    this.router.navigate(['/', 'perro']);

  }

  goToProductos() {
    this.router.navigate(['/', 'producto']);

  }
  goToHalls() {
    this.router.navigate(['/', 'halls'])
  }

  goToOfertas() {
    this.router.navigate(['/', 'ofertas'])
  }
}
