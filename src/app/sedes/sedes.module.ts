import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesListComponent } from './sedes-list/sedes-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SedesComponent } from './sedes.component';
import { BusquedaComponentComponent } from './BusquedaComponent/BusquedaComponent.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [SedesListComponent],
  declarations: [SedesComponent,SedesListComponent,BusquedaComponentComponent]
})
export class SedesModule { }
