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
import { ProductoModule } from './producto/producto.module';

import { FormsModule } from '@angular/forms';
import { PackRoutingModule } from './packServicios/pack-routing.module';
import { OfertaModule } from './oferta/oferta.module';

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
    ServiciosDuenosModule,
    HallOfFameModule,
    SedesModule,
    ServiciosMascotasModule,
    PerroModule,
    ProductoModule,
    PackRoutingModule,
    FormsModule,
    OfertaModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
