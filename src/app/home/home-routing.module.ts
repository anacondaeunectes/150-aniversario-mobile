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
  },
  {
    path:'materiales',
    loadChildren: () =>import ("./../componentes/materiales/materiales.module").then(m => m.MaterialesPageModule)
  },
  {
    path:'logos',
    loadChildren: () =>import ("./../componentes/logos/logos.module").then(m => m.LogosPageModule)
  },
  {
    path:'agradecimientos',
    loadChildren: () =>import ("./../componentes/agradecimientos/agradecimientos.module").then(m => m.AgradecimientosPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
