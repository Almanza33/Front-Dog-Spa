import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OfertaComponent } from './oferta.component';

const routes: Routes = [
  {
    path: 'ofertas',
    children: [
    {
      path: 'list',
      component: OfertaComponent
    },
    {
      path: ':id',
      component: OfertaComponent
    },
  ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ofertaRoutingModule {}
