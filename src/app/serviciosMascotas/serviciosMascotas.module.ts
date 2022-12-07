import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMascotasDetailComponent } from './ServicioMascotas-detail/ServicioMascotas-detail.component';
import { ServicioMascotasListComponent } from './ServicioMascotas-list/ServicioMascotas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ServicioMascotasListComponent],
  declarations: [ServicioMascotasListComponent,ServicioMascotasDetailComponent]
})
export class ServiciosMascotasModule { }
