import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackServiciosListComponent } from './packServicios-list/packServicios-list.component';
import { PackDetailComponent } from './pack-detail/pack-detail.component';

const routes: Routes = [
  {path: 'packs',
children:[
  {
    path: 'list',
    component: PackServiciosListComponent
  },
  {
    path: ':id',
    component: PackDetailComponent
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackRoutingModule{}
