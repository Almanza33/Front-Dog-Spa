import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaComponent } from './oferta.component';

import { RouterModule } from '@angular/router';
import { ofertaRoutingModule } from './oferta.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ofertaRoutingModule
  ],
  exports: [OfertaComponent],
  declarations: [OfertaComponent]
})
export class OfertaModule {}
