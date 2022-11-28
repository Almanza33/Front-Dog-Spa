import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ofertaSedeComponent } from './ofertaSede.component';
import { ofertaSedeListComponent } from './ofertaSede-list/packofertas-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  declarations: [ofertaSedeListComponent],
  exports: [ofertaSedeListComponent]
})
export class SedesModule { }
