import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HimnoPage } from './himno.page';

const routes: Routes = [
  {
    path: '',
    component: HimnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HimnoPageRoutingModule {}
