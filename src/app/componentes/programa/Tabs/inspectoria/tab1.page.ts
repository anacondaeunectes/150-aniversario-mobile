import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from 'src/app/componentes/image-modal/image-modal.page';
import { VideoYModalPage } from 'src/app/componentes/video-y-modal/video-y-modal.page';
import { Acto } from "../../../../modelos/acto";
import { ApiService } from "../../../../servicios/api.service";
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit { 

  constructor(private servicio:ApiService,private modalController: ModalController) { }

  Actos:Acto[]
  
  ngOnInit() {
    this.ConseguirDatos()
    //this.Actos.forEach(x => {this.validateFecha(x.fecha)} )
  
  }
  /**
     * Abre un video en un modal creado a parte
     * @param actos parámetro de donde se va a buscar la url del video
     */
  async openVideo(actos:Acto) {
    let video
    actos.medios.filter(x => x.tipo == "video/mp4").forEach(x =>video = x.url)
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

  /**
     * Valida si existe una url de tipo video/mp4 
     * @param acto 
     * @returns url de un video
     */
  validateVideo(actos:Acto){
    return actos["medios"].find(x => x.tipo == "video/mp4")
  }
  /**
     * Valida si existe una url de tipo image/jpg 
     * @param himno 
     * @returns url de un audio
     */
  validateImagen(actos:Acto){
    return actos["medios"].find((x) => x.tipo == "image/jpg")
  }
  /**
   * Transforma la fecha de datetime a date
   * @param fecha 
   * @returns 
   */
  validateFecha(fecha){
    console.log(fecha)
    fecha=fecha*1000
    console.log(fecha)
    var n = new Date(fecha).toLocaleDateString("en-US")
    console.log(n);
    return n
    
  }

  /**
   * rellena el array con los datos traidos del back al iniciar la página
   */
  ConseguirDatos(){
    this.servicio.getActos1().then(data => {data.forEach(x => x.truncating=true); this.Actos=data}).then(x => this.Actos.forEach(x=> x.fecha=( this.validateFecha(x.fecha))))
  }

  /**
   * Busca la url de la imagen a mostrar
   * @param actos 
   * @returns 
   */
  findUrl(actos:Acto){
    let url
    
    return actos["medios"].find(x => x.tipo == "image/jpg").url
  }

  public limit: number = 1;

  /**
     * Abre una imagen en un modal creado a parte
     * @param acto parámetro de donde se va a buscar la url de la imagen
     */
  async openPreview(acto:Acto) {
    let img
    acto.medios.filter(x => x.tipo == "image/jpg").forEach(x =>img = x.url)
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img

      }
    });
    modal.present();
  }

}
