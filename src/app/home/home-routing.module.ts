import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'saludos',
    loadChildren: () => import('./../componentes/saludos/saludos.module').then( m => m.SaludosPageModule)
  },
  {
    path: 'programa',
    loadChildren: () => import('./../componentes/programa/programa.module').then( m => m.ProgramaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
