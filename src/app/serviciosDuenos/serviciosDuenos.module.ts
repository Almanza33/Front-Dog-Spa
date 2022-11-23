import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiciosDuenosListComponent } from './serviciosDuenos-list/serviciosDuenos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ServiciosDuenosListComponent],
  declarations: [ServiciosDuenosListComponent]
})
export class ServiciosDuenosModule { }
