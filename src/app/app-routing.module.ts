import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CuentaAtrasComponent } from './componentes/cuenta-atras/cuenta-atras.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'countdown',
    component: CuentaAtrasComponent
  },
  {
    path: '',
    redirectTo: 'home', //lo he cambiado de home a saludos
    pathMatch: 'full'
  },
  {
    path: 'saludos',
    loadChildren: () => import('./componentes/saludos/saludos.module').then( m => m.SaludosPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./componentes/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }