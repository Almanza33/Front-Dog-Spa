import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductoListComponent } from './productos-list/producto-list.component';
import { ProductoComponent } from './producto.component';

const routes: Routes = [{
  path: 'productos',
  children: [
    {
      path: 'list',
      component: ProductoListComponent
    },
    {
      path: ':id',
      component: ProductoComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productoRoutingModule { }

