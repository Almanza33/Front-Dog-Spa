import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PackServiciosModule } from './packServicios/packServicios.module';
import { ServiciosDuenosModule } from './serviciosDuenos/serviciosDuenos.module';
import { HallOfFameModule } from './HallOfFame/HallOfFame.module';
import { SedesModule } from './sedes/sedes.module';
import { ServiciosMascotasModule } from './serviciosMascotas/serviciosMascotas.module';

import { PerroModule } from './perro/perro.module';

import {ProductosModule} from './productos/productos.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PackServiciosModule,
    ServiciosDuenosModule,
    HallOfFameModule,
    SedesModule,
    ServiciosMascotasModule,
    PerroModule,
    ProductosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
