import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { PerroComponent } from './perro/perro.component';

const routes: Routes = [
  { path: 'sedes', component: SedesComponent },
  { path: 'perro', component: PerroComponent},

]
;



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
