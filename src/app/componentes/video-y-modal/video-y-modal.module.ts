import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { YoutubePipe } from "../../youtube.pipe";
import { VideoYModalPageRoutingModule } from './video-y-modal-routing.module';

import { VideoYModalPage } from './video-y-modal.page';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    VideoYModalPageRoutingModule
  ],
  declarations: [VideoYModalPage, YoutubePipe]
})
export class VideoYModalPageModule {}
