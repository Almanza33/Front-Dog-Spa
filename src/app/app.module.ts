import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PackServiciosModule } from './packServicios/packServicios.module';
import { ServiciosDuenosModule } from './serviciosDuenos/serviciosDuenos.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PackServiciosModule,
    ServiciosDuenosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
