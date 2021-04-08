import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludosPageRoutingModule } from './saludos-routing.module';

import { SaludosPage } from './saludos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludosPageRoutingModule
  ],
  declarations: [SaludosPage]
})
export class SaludosPageModule {}
