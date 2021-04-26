import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialesPage } from './materiales.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialesPage,
    children:[
      {
        path: 'canciones',
        loadChildren: () => import('./Tabs/canciones/canciones.module').then( m => m.CancionesPageModule)
      },
      {
        path: 'imagenes',
        loadChildren: () => import('./Tabs/imagenes/imagenes.module').then( m => m.ImagenesPageModule)
      },
      {
        path:'',
        redirectTo:'/materiales/canciones',
        pathMatch:'full'
      }
    ]
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialesPageRoutingModule {}
