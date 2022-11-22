import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerrosListComponent } from './perros-list/perros-list.component';
import { RouterModule } from '@angular/router';
import { HofListComponent } from './hof-list/hof-list.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [	PerrosListComponent,
    HofListComponent
   ],
  exports: [PerrosListComponent,
  HofListComponent]
})
export class HallOfFameModule { }
