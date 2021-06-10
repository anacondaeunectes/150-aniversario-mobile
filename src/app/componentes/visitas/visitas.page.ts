
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoYModalPage } from 'src/app/componentes/video-y-modal/video-y-modal.page';
import { medio } from 'src/app/modelos/medio';
import { visita } from "../../modelos/visita";
import { ApiService } from "../../servicios/api.service";
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {

  public limit: number = 1;
  constructor(private servicio:ApiService,private modalController: ModalController) { }
  
  Visitas:visita[]
  
  ngOnInit() {
    this.ConseguirDatos()
    //this.Actos.forEach(x => {this.validateFecha(x.fecha)} )
  
  }
  async openVideo(visita:visita) {
    let video
    visita.medios.filter(x => x.tipo == "video/mp4").forEach(x =>video = x.url)
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
  validateVideo(visitas:visita){
    return visitas["medios"].find(x => x.tipo == "video/mp4")
  }
   /**
     * Valida si existe una url de tipo image/jpg 
     * @param visitas 
     * @returns url de un audio
     */
  validateImagen(visitas:visita){
    
    return visitas["medios"].find((x => x.tipo == "image/jpg"))
    

  }

  /**
   * Busca la url de la imagen a mostrar
   * @param visitas 
   * @returns 
   */
  findUrl(visitas:visita){
    let url
    
    return visitas["medios"].find(x => x.tipo == "image/jpg").url
  }

  

  /**
   * Transforma la fecha de datetime a date
   * @param fecha 
   * @returns 
   */
  validateFecha(fecha){
    
    fecha=fecha*1000
    
    var n = new Date(fecha).toLocaleDateString("en-US")
    
    return n
    
  }

  /**
   * rellena el array con los datos traidos del back al iniciar la página
   */
  ConseguirDatos(){
    this.servicio.getVisitas().then(data => {data.forEach(x => x.truncating=true); this.Visitas=data})
  }

  /**
     * Abre una imagen en un modal creado a parte
     * @param visita parámetro de donde se va a buscar la url de la imagen
     */
  async openPreview(visita:visita) {
    let img
    visita.medios.filter(x => x.tipo == "image/jpg").forEach(x =>img = x.url)
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
