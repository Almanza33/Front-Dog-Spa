import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { PerroComponent } from './perro/perro.component';
import { ServiciosDuenosModule } from './serviciosDuenos/serviciosDuenos.module';
import { PackServiciosModule } from './packServicios/packServicios.module';
import {ProductoComponent} from './productos/producto.component';
import { HallOfFameModule } from './HallOfFame/HallOfFame.module';

import { HofListComponent } from './HallOfFame/hof-list/hof-list.component';
import { PerrosListComponent } from './HallOfFame/perros-list/perros-list.component';

const routes: Routes = [
  { path: 'sedes', component: SedesComponent },
  { path: 'perro', component: PerroComponent},
  { path: 'productos', component: ProductoComponent},
  { path: 'halls', component: HofListComponent},
  { path: 'serviciosDuenos', component: ServiciosDuenosModule},
  { path: 'packServicios', component: PackServiciosModule}

]
;



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
