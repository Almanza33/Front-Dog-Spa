import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PackServiciosListComponent } from './packServicios-list/packServicios-list.component';
import { PackDetailComponent } from './pack-detail/pack-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PackServiciosListComponent],
  declarations: [PackServiciosListComponent, PackDetailComponent]
})
export class PackServiciosModule { }
