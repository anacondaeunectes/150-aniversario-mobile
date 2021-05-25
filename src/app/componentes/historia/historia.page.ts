import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import { historia } from "../../modelos/historia";
import { ImageModalPage } from '../image-modal/image-modal.page';
import { VideoYModalPage } from '../video-y-modal/video-y-modal.page';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html', 
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  constructor(public router:Router,private modalController: ModalController,private servicio:ApiService) { }

  Historia:historia[]
  id:number
  titulo:String

  ngOnInit() {
    this.servicio.getHistoria().then(data => console.log(this.Historia=data)).catch(error => console.log("hola", error))
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
  async openVideo(video) {
    const modal = await this.modalController.create({
      component: VideoYModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        video

      }
    });
    modal.present();
  }

}
