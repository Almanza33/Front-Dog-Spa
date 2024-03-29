import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { PerroComponent } from './perro/perro.component';
import { ServiciosDuenosModule } from './serviciosDuenos/serviciosDuenos.module';
import { PackServiciosListComponent } from './packServicios/packServicios-list/packServicios-list.component';
import { ServiciosDuenosListComponent } from './serviciosDuenos/serviciosDuenos-list/serviciosDuenos-list.component';
import { ProductoComponent } from './producto/producto.component';
import { OfertaComponent } from './oferta/oferta.component';
import { HallOfFameModule } from './HallOfFame/HallOfFame.module';

import { HofListComponent } from './HallOfFame/hof-list/hof-list.component';
import { PerrosListComponent } from './HallOfFame/perros-list/perros-list.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioMascotasListComponent } from './ServiciosMascotas/ServicioMascotas-list/ServicioMascotas-list.component';

const routes: Routes = [
  { path: 'sedes', component: SedesComponent },
  { path: 'perro', component: PerroComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'halls', component: HofListComponent},
  { path: 'packs', component: PackServiciosListComponent},
  { path: 'serviciosDuenos', component: ServiciosDuenosListComponent},
  { path: 'ofertas', component: OfertaComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'serviciosMascotas', component: ServicioMascotasListComponent}

]
;



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
