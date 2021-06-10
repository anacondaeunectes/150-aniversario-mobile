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

  /**
   * rellena el array con los datos traidos del back al iniciar la página
   */
  ngOnInit() {
    this.servicio.getHistoria().then(data => console.log(this.Historia=data)).catch(error => console.log("hola", error))
  }
  /**
   * Usa el componente router para navegar al menú principal
   */
  atras(){
    this.router.navigateByUrl('home');
  }
  /**
     * Abre una imagen en un modal creado a parte
     * @param historia parámetro de donde se va a buscar la url de la imagen
     */
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
  /**
     * Abre un video en un modal creado a parte
     * @param himno parámetro de donde se va a buscar la url del video
     */
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
