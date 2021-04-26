import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancionesPage } from './canciones.page';

const routes: Routes = [
  {
    path: '',
    component: CancionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancionesPageRoutingModule {}
