import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoLegalPageRoutingModule } from './aviso-legal-routing.module';

import { AvisoLegalPage } from './aviso-legal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoLegalPageRoutingModule
  ],
  declarations: [AvisoLegalPage]
})
export class AvisoLegalPageModule {}
