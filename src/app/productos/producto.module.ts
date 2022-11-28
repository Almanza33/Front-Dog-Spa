import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { ProductoListComponent } from './productos-list/producto-list.component';
import { RouterModule } from '@angular/router';
import { productoRoutingModule } from './producto-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    productoRoutingModule
  ],
  exports: [ProductoListComponent],
  declarations: [ProductoListComponent, ProductoComponent]
})
export class ProductoModule { }
