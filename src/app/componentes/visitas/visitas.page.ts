
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoYModalPage } from 'src/app/componentes/video-y-modal/video-y-modal.page';
import { medio } from 'src/app/modelos/medio';
import { visita } from "../../modelos/visita";
import { ApiService } from "../../servicios/api.service";

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {

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

  validateVideo(visitas:visita){
    return visitas["medios"].find(x => x.tipo == "video/mp4")
  }
  validateImagen(visitas:visita){
    
    return visitas["medios"].find((x => x.tipo == "image/jpg"))
    

  }

  findUrl(visitas:visita){
    let url
    
    return visitas["medios"].find(x => x.tipo == "image/jpg").url
  }

  

  validateFecha(fecha){
    
    fecha=fecha*1000
    
    var n = new Date(fecha).toLocaleDateString("en-US")
    
    return n
    
  }

  ConseguirDatos(){
    this.servicio.getVisitas().then(data => console.log(this.Visitas=data))
  }


}
