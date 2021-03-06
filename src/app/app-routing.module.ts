import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashscreenComponent } from './componentes/splashscreen/splashscreen.component';
import { CuentaAtrasComponent } from "./componentes/cuenta-atras/cuenta-atras.component";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splashscreen',
    component: SplashscreenComponent
  },
  {
    path: '',
    redirectTo: 'splashscreen',
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
  {
    path: 'programa',
    loadChildren: () => import('./componentes/programa/programa.module').then( m => m.ProgramaPageModule)
  },
  {
    path: 'video-y-modal',
    loadChildren: () => import('./componentes/video-y-modal/video-y-modal.module').then( m => m.VideoYModalPageModule)
  },
  {
    path: 'materiales',
    loadChildren:()=> import('./componentes/materiales/materiales.module').then(m =>m.MaterialesPageModule)
  },
  {
    path:'logos',
    loadChildren: () =>import ("./componentes/logos/logos.module").then(m => m.LogosPageModule)
  },
  {
    path: 'agradecimientos',
    loadChildren: () => import('./componentes/agradecimientos/agradecimientos.module').then( m => m.AgradecimientosPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./componentes/historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'himno',
    loadChildren: () => import('./componentes/himno/himno.module').then( m => m.HimnoPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./componentes/visitas/visitas.module').then( m => m.VisitasPageModule)
  },
  {
    path: 'aviso-legal',
    loadChildren: () => import('./componentes/aviso-legal/aviso-legal.module').then( m => m.AvisoLegalPageModule)
  },
  {
    path: 'oraciones',
    loadChildren: () => import('./componentes/oraciones/oraciones.module').then( m => m.OracionesPageModule)
  },
  {
    path: 'vocacional',
    loadChildren: () => import('./componentes/vocacional/vocacional.module').then( m => m.VocacionalPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
