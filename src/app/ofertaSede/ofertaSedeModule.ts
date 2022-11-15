import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ofertaSedesListComponent } from './ofertaSedes-list/ofertaSedes-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  declarations: [ofertaSedesListComponent],
  exports: [ofertaSedesListComponent]
})
export class SedesModule { }
