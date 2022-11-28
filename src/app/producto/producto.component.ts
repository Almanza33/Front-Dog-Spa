import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Array<Producto> = [];
  selected: Boolean = false;
  selectedProducto!: Producto;

  constructor(private productoService: ProductoService) { }

  getProductos():void{
    this.productoService.getProductos().subscribe((productos) =>{
      this.productos = productos;
    });
  }

  onSelected(producto: Producto): void{
    this.selected = true;
    this.selectedProducto = producto;
  }




 ngOnInit() {
  this.getProductos();
 }

}


