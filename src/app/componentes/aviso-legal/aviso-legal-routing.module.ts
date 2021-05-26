import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoLegalPage } from './aviso-legal.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoLegalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoLegalPageRoutingModule {}
