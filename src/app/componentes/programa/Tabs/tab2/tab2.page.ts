import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoYModalPage } from 'src/app/componentes/video-y-modal/video-y-modal.page';
import { Acto } from "../../../../modelos/acto";
import { ApiService } from "../../../../servicios/api.service";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private servicio:ApiService,private modalController: ModalController) { }

  Actos:Acto[]
  
  ngOnInit() {
    this.ConseguirDatos()
    //this.Actos.forEach(x => {this.validateFecha(x.fecha)} )
  
  }
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

  validateVideo(actos:Acto){
    return actos["medios"].find(x => x.tipo == "video/mp4")
  }
  validateImagen(actos:Acto){
    return actos["medios"].find((x) => x.tipo == "image/jpg")
  }

  validateFecha(fecha){
    console.log(fecha)
    fecha=fecha*1000
    console.log(fecha)
    var n = new Date(fecha).toLocaleDateString("en-US")
    console.log(n);
    return n
    
  }

  ConseguirDatos(){
    this.servicio.getActos2().then(data => {data.forEach(x => x.truncating=true); this.Actos=data}).then(x => this.Actos.forEach(x=> x.fecha=( this.validateFecha(x.fecha))))
  }


  findUrl(actos:Acto){
    let url
    
    return actos["medios"].find(x => x.tipo == "image/jpg").url
  }

  public limit: number = 1;

}
