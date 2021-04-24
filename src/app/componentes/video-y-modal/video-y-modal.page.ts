
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video-y-modal',
  templateUrl: './video-y-modal.page.html',
  styleUrls: ['./video-y-modal.page.scss'],
})
export class VideoYModalPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
 
  video:SafeResourceUrl;
  
 
  sliderOpts = {
    zoom: true
  };
  constructor(private modalController: ModalController, public sanitizer: DomSanitizer) {
     
   }

  ngOnInit() {
    
  }

  
  
 
  close() {
    this.modalController.dismiss();
  }

}
