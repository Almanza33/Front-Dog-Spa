import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';

import { RouterModule } from '@angular/router';
import { productoRoutingModule } from './producto.routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    productoRoutingModule
  ],
  exports: [ProductoComponent],
  declarations: [ProductoComponent]
})
export class ProductoModule { }
