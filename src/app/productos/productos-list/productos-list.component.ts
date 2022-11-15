import { Component, OnInit } from '@angular/core';
import { ProductosDetail } from '../productos-Detail';
import { ProductosService } from '../Productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  constructor(private serviciosMascotasService: ProductosService) { }
  servicioMascotas:  Array<ProductoDetail> = [];
  getServiciosMascotas(): void {
    this.serviciosMascotasService.getProducto().subscribe(producto => this.producto=productos);
    };


  ngOnInit() {
    this.getProductos
  }

}
