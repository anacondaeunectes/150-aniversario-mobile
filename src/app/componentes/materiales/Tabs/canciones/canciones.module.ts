import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancionesPageRoutingModule } from './canciones-routing.module';

import { CancionesPage } from './canciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancionesPageRoutingModule
  ],
  declarations: [CancionesPage]
})
export class CancionesPageModule {}
