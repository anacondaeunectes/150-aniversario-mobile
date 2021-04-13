import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CuentaAtrasComponent } from "./componentes/cuenta-atras/cuenta-atras.component";
import { FormateoCuentaAtrasPipe } from './pipes/formateo-cuenta-atras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormateoCuentaAtrasPipe,
    CuentaAtrasComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
