import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';

import { RouterModule } from '@angular/router';
import { productoRoutingModule } from './producto.routing';

import {FormsModule} from '@angular/forms'
import { SearchComponent } from './search/search.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    productoRoutingModule,
    FormsModule
  ],
  exports: [ProductoComponent],
  declarations: [ProductoComponent,SearchComponent]
})
export class ProductoModule { }
