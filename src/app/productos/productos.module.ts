import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  declarations: [ProductosListComponent],
  exports: [ProductosListComponent]
})
export class ProductosModule { }
