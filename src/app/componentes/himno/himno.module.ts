import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HimnoPageRoutingModule } from './himno-routing.module';

import { HimnoPage } from './himno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HimnoPageRoutingModule
  ],
  declarations: [HimnoPage]
})
export class HimnoPageModule {}
