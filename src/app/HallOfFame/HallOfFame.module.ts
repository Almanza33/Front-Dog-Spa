import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerrosListComponent } from './perros-list/perros-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerrosListComponent],
  exports: [PerrosListComponent]
})
export class HallOfFameModule { }
