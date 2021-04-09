import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludosPage } from './saludos.page';

const routes: Routes = [
  {
    path: '',
    component: SaludosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludosPageRoutingModule {}
