import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosMascotasComponent } from './serviciosMascotas.component';
import { ServiciosMascotasListComponent } from './serviciosMascotas-list/serviciosMascotas-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  declarations: [ServiciosMascotasListComponent],
  exports: [ServiciosMascotasListComponent]
})
export class ServiciosMascotasModule { }
