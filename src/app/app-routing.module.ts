import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { PerroComponent } from './perro/perro.component';
import {ProductosComponent} from './productos/productos.component';
import { HallOfFameModule } from './HallOfFame/HallOfFame.module';

import { HofListComponent } from './HallOfFame/hof-list/hof-list.component';
import { PerrosListComponent } from './HallOfFame/perros-list/perros-list.component';

const routes: Routes = [
  { path: 'sedes', component: SedesComponent },
  { path: 'perro', component: PerroComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'halls', component: HofListComponent}

]
;



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
