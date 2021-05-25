import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import {Router} from '@angular/router';
import { StreamingMedia,StreamingVideoOptions } from "@ionic-native/streaming-media/ngx";

import { VideoYModalPageModule } from '../video-y-modal/video-y-modal.module'
import { VideoYModalPage } from '../video-y-modal/video-y-modal.page';

import { ApiService } from "../../servicios/api.service";


@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.page.html',
  styleUrls: ['./saludos.page.scss'],
})
export class SaludosPage implements OnInit {

  

  constructor(private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef,
    public router:Router, private streamingMedia:StreamingMedia, private servicioApi: ApiService) { }

  ngOnInit() {

    this.servicioApi.getSaludos()
      .then( res => console.log('Respuesta saludos: ', res))
      .catch( err => console.log('Error Saludos: ', err));
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

  startVideo(){
    let options:StreamingVideoOptions ={
      successCallback: () => { console.log('Video played') },
     errorCallback: (e) => { console.log('Error streaming') },
     orientation: 'landscape',
      
      
    }
    this.streamingMedia.playVideo("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", options);
  }
  
  
  public saludos = [{
    subtitle: 'Superiora General',
    title: 'Madre Yvonne',
    content: `
    Queridas Hermanas,
      Aquí, delante de nuestra casa, que es la casa de todas ustedes, y bajo la mirada de María Auxiliadora,
      quiero llegar a todas las partes del mundo para desearles una Santa Navidad y un Feliz Año 2017.
      De esta casa, que es la casa de todas las Hijas de María Auxiliadora, también de todos los jóvenes,
      los laicos, las familias que encontramos en los varios países del mundo en los cuales estamos presentes,
      quiero llegar a cada comunidad, a cada casa, a cada una y uno de vosotros en este momento particular de
      alegría en la preparación de la Navidad. Quiero confiar a María, nuestra Madre y Auxiliadora, la misión
      de entrar en sus casas, de estar cerca de cada una y de cada uno para expresarles mis sentimientos de
      alegría y de esperanza que quisiera fueran compartidos con todos. María no tiene problemas para moverse
      de un lado a otro, por lo tanto será Ella mi mensajera para desearles una Navidad de alegría y de esperanza.
      Es un deseo que gustaría que llegue a lo profundo de cada uno. ¿Quién mejor que María nos puede acompañar
      en esta espera para acoger a Jesús con un corazón de alegría y esperanza?
    `,
    img: './../../assets/images/saludos/madreyvonne.jpg',
    video:'https://www.youtube.com/embed/t-6-vlLj2l0',
    truncating : true
  },
  {
    subtitle: 'Inspectora',
    title: 'Mª del Rosario García',
    content: `
    Queridas Hermanas,
      Aquí, delante de nuestra casa, que es la casa de todas ustedes, y bajo la mirada de María Auxiliadora,
      quiero llegar a todas las partes del mundo para desearles una Santa Navidad y un Feliz Año 2017.
      De esta casa, que es la casa de todas las Hijas de María Auxiliadora, también de todos los jóvenes,
      los laicos, las familias que encontramos en los varios países del mundo en los cuales estamos presentes,
      quiero llegar a cada comunidad, a cada casa, a cada una y uno de vosotros en este momento particular de
      alegría en la preparación de la Navidad. Quiero confiar a María, nuestra Madre y Auxiliadora, la misión
      de entrar en sus casas, de estar cerca de cada una y de cada uno para expresarles mis sentimientos de
      alegría y de esperanza que quisiera fueran compartidos con todos. María no tiene problemas para moverse
      de un lado a otro, por lo tanto será Ella mi mensajera para desearles una Navidad de alegría y de esperanza.
      Es un deseo que gustaría que llegue a lo profundo de cada uno. ¿Quién mejor que María nos puede acompañar
      en esta espera para acoger a Jesús con un corazón de alegría y esperanza?
    `,
    img: './../../assets/images/saludos/chary.jpg',
    truncating : true
  }
  ];

  // Show more/less
  public limit: number = 40;
}
