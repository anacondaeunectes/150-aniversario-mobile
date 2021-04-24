import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { YoutubePipe } from './youtube.pipe';
@NgModule({
  declarations: [AppComponent, YoutubePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },StreamingMedia],
  bootstrap: [AppComponent],
})
export class AppModule {}
