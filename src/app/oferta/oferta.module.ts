import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaComponent } from './oferta.component';

import { RouterModule } from '@angular/router';
import { ofertaRoutingModule } from './oferta.routing';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ofertaRoutingModule,
    FormsModule
  ],
  exports: [OfertaComponent],
  declarations: [OfertaComponent, SearchComponent]
})
export class OfertaModule {}
