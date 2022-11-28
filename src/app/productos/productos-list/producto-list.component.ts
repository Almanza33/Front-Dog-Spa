import { Component, OnInit } from '@angular/core';
import {Producto} from '../producto';
import { ProductoService } from '../producto.service';



@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Array<Producto> = [];
  selected: Boolean = false;
  selectedProducto!: Producto;

  constructor(private ProductoService: ProductoService) { }

  getProductos():void{
    this.ProductoService.getProductos().subscribe((productos) =>{
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
