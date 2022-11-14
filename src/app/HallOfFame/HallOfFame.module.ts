import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerrosListComponent } from './perros-list/perros-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PerrosListComponent],
  exports: [PerrosListComponent]
})
export class HallOfFameModule { }
