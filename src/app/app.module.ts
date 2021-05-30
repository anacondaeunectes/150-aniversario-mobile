import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { YoutubePipe } from './youtube.pipe';
import { CuentaAtrasComponent } from "./componentes/cuenta-atras/cuenta-atras.component";
import { SplashscreenComponent } from "./componentes/splashscreen/splashscreen.component";
import { HttpClientModule } from '@angular/common/http';
import { FormateoCDPipe } from './pipes/formateo-cd.pipe';
@NgModule({
  declarations: [AppComponent, YoutubePipe, FormateoCDPipe, CuentaAtrasComponent, SplashscreenComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },StreamingMedia],
  bootstrap: [AppComponent],
})
export class AppModule {}
