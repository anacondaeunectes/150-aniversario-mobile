import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { Router } from '@angular/router';
import { StreamingMedia,StreamingVideoOptions } from "@ionic-native/streaming-media/ngx";

@Component({
  selector: 'app-logos',
  templateUrl: './logos.page.html',
  styleUrls: ['./logos.page.scss'],
})
export class LogosPage implements OnInit {

  constructor(private modalController: ModalController, public router:Router,
    private streamingMedia:StreamingMedia) { }

  ngOnInit() {
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
  
  public logos = [{
    subtitle: 'Logo General',
    title: 'Hijas Salesianas Mª Auxiliadora',
    content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    img: './../../assets/Logos_APP/logogeneral.png',
    truncating : true
  },
  {
    subtitle: 'Logo conmemorativo',
    title: '150 Aniversario fundacional',
    content: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    img: './../../assets/Logos_APP/Logo Español-02.png',
    truncating : true
  }
  ];

  // Show more/less
  public limit: number = 40;

}
