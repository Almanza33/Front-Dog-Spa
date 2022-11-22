import { Routes, RouterModule } from '@angular/router';
import { SedesListComponent } from './sedes-list/sedes-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'sedes',
  children: [
    {
      path: 'list',
      component: SedesListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sedeRoutingModule { }


