import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiciosDuenosListComponent } from './serviciosDuenos-list/serviciosDuenos-list.component';
import { ServiciosDuenosDetailComponent} from './serviciosDuenos-detail/serviciosDuenos-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ServiciosDuenosListComponent],
  declarations: [ServiciosDuenosListComponent, ServiciosDuenosDetailComponent]
})
export class ServiciosDuenosModule { }
