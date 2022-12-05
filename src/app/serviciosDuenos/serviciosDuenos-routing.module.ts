import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosDuenosListComponent } from './serviciosDuenos-list/serviciosDuenos-list.component';
import { ServiciosDuenosDetailComponent } from './serviciosDuenos-detail/serviciosDuenos-detail.component';

const routes: Routes = [
  {path: 'serviciosDuenos',
children:[
  {
    path: 'list',
    component: ServiciosDuenosListComponent
  },
  {
    path: ':id',
    component: ServiciosDuenosDetailComponent
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosDuenosRoutingModule{}
