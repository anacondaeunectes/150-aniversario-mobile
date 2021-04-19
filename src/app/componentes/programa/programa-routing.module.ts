import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramaPage } from './programa.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaPage,
    children:[
      {
        path: 'tab1',
        loadChildren: () => import('./Tabs/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./Tabs/tab2/tab2.module').then( m => m.Tab2PageModule)
      },
      /*{
        path: 'tab3',
        loadChildren: () => import('./Tabs/tab3/tab3.module').then( m => m.Tab3PageModule)
      },*/
      {
        path:'',
        redirectTo:'/programa/tab1',
        pathMatch:'full'
      }
    ]
  },
  /*{
    path:'',
    redirectTo:'/programa/tab1',
    pathMatch:'full'
  }*/
  {
    path: 'tab3',
    loadChildren: () => import('./Tabs/tab3/tab3.module').then( m => m.Tab3PageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaPageRoutingModule {}
