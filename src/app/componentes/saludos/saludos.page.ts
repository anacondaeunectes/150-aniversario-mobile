import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import {Router} from '@angular/router';
import { StreamingMedia,StreamingVideoOptions } from "@ionic-native/streaming-media/ngx";

import { VideoYModalPageModule } from '../video-y-modal/video-y-modal.module'
import { VideoYModalPage } from '../video-y-modal/video-y-modal.page';

import { ApiService } from "../../servicios/api.service";
import { Saludo } from 'src/app/modelos/saludo';


@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.page.html',
  styleUrls: ['./saludos.page.scss'],
})
export class SaludosPage implements OnInit {

  public saludos = [];
  

  constructor(private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef,
    public router:Router, private streamingMedia:StreamingMedia, private servicioApi: ApiService) { }

  ngOnInit() {

    this.servicioApi.getSaludos().then(data => {data.forEach(x => x.truncating=true); this.saludos=data})
  }

  atras(){
    this.router.navigateByUrl('home');
  }

  async openPreview(img) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img

      }
    });
    modal.present();
  }
 

  startVideo(){
    let options:StreamingVideoOptions ={
      successCallback: () => { console.log('Video played') },
     errorCallback: (e) => { console.log('Error streaming') },
     orientation: 'landscape',
      
      
    }
    this.streamingMedia.playVideo("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", options);
  }

  findUrl(saludo:Saludo){
    let url
    
    return saludo["medios"].find(x => x.tipo == "image/jpg").url
  }

  async openVideo(saludo:Saludo) {
    let video
    saludo.medios.filter(x => x.tipo == "video/mp4").forEach(x =>video = x.url)
    console.log(video)
    const modal = await this.modalController.create({
      component: VideoYModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        video

      }
    });
    modal.present();
  }

  validateVideo(saludo:Saludo){
    return saludo["medios"].find(x => x.tipo == "video/mp4")
  }
  validateImagen(saludo:Saludo){
    
    return saludo["medios"].find((x => x.tipo == "image/jpg"))
    

  }
  
  


  // Show more/less
  public limit: number = 1;
}
