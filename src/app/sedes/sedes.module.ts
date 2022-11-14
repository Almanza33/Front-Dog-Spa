import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesListComponent } from './sedes-list/sedes-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  declarations: [SedesListComponent],
  exports: [SedesListComponent]
})
export class SedesModule { }
