import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PackServiciosListComponent } from './packServicios-list/packServicios-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PackServiciosListComponent],
  declarations: [PackServiciosListComponent]
})
export class PackServiciosModule { }
