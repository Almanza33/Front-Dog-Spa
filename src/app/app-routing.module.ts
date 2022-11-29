import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { PerroComponent } from './perro/perro.component';
import { ServiciosDuenosModule } from './serviciosDuenos/serviciosDuenos.module';
import { PackServiciosModule } from './packServicios/packServicios.module';
import { ProductoComponent } from './producto/producto.component';
import { OfertaComponent } from './oferta/oferta.component';
import { HallOfFameModule } from './HallOfFame/HallOfFame.module';

import { HofListComponent } from './HallOfFame/hof-list/hof-list.component';
import { PerrosListComponent } from './HallOfFame/perros-list/perros-list.component';

const routes: Routes = [
  { path: 'sedes', component: SedesComponent },
  { path: 'perro', component: PerroComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'halls', component: HofListComponent},
  { path: 'serviciosDuenos', component: ServiciosDuenosModule},
  { path: 'packServicios', component: PackServiciosModule},
  { path: 'ofertas', component: OfertaComponent}

]
;



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
