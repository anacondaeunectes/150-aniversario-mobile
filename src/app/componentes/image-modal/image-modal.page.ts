import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  /**
   * Nos permite acceder a los métodos de un componente que existe en el HTML
   */
  @ViewChild(IonSlides) slides: IonSlides;
 
  img;

 
  sliderOpts = {
    zoom: true
  };
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.slides.update();
  }
  /**
   * Permite hacer zoom en las imagenes
   * @param zoomIn 
   */
  async zoom(zoomIn: boolean) {
    const slider = await this.slides.getSwiper();
    const zoom = slider.zoom;
    zoomIn ? zoom.in() : zoom.out();
    
  }
  /**
   * Cierra el modal
   */
  close() {
    this.modalController.dismiss();
  }
}
