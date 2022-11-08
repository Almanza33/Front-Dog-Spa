import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosMascotasComponent } from './serviciosMascotas.component';
import { ServiciosMascotasListComponent } from './serviciosMascotas-list/serviciosMascotas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiciosMascotasListComponent],
  exports: [ServiciosMascotasListComponent]
})
export class ServiciosMascotasModule { }
