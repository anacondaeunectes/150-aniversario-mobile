import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoYModalPage } from './video-y-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VideoYModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoYModalPageRoutingModule {}
