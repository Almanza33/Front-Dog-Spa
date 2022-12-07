import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioMascotasDetailComponent } from './ServicioMascotas-detail/ServicioMascotas-detail.component';
import { ServicioMascotasListComponent } from './ServicioMascotas-list/ServicioMascotas-list.component';

const routes: Routes = [
  {path: 'serviciosMascotas',
children:[
  {
    path: 'list',
    component: ServicioMascotasListComponent
  },
  {
    path: ':id',
    component: ServicioMascotasDetailComponent
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosDuenosRoutingModule{}
