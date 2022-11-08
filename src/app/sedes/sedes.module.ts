import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesComponent } from './sedes.component';
import { SedesListComponent } from './sedes-list/sedes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SedesListComponent],
  exports: [SedesListComponent]
})
export class SedesModule { }
