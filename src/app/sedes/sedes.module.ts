import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesListComponent } from './sedes-list/sedes-list.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SedesListComponent],
  exports: [SedesListComponent]
})
export class SedesModule { }
