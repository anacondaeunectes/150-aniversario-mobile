import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../../../image-modal/image-modal.page';
import { material } from "../../../../modelos/material"
import { ApiService } from "../../../../servicios/api.service";


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  

  constructor(private http:HttpClient, private modalController: ModalController,private servicio:ApiService) { 
   // this.loadImages();
  }

  imageList : material[] ;
 
  /**
     * Abre una imagen en un modal creado a parte
     * @param img la url de la imagen
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
   * rellena el array con los datos traidos del back al iniciar la página
   */
  ngOnInit() {
    this.servicio.getMaterialImagenes().then(data => console.log(this.imageList=data)).catch(error => console.log("hola", error))
    
  }

}
