import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerrosListComponent } from './perros-list/perros-list.component';
import { RouterModule } from '@angular/router';
import { HofListComponent } from './hof-list/hof-list.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [	PerrosListComponent,
    HofListComponent,
    SearchComponent
   ],
  exports: [PerrosListComponent,
  HofListComponent]
})
export class HallOfFameModule { }
