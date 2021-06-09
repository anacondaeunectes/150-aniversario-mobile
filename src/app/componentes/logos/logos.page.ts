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
    Maria cammina in questa casa: es el eslogan visible en el logo, en el cual el nombre de MARIA permanece invariable, mientras el resto de la frase está traducida en las cuatro lenguas – inglés, español, francés, portugués – para ser aplicado en los distintos Países.

    La frase – que recoge las palabras dichas por Don Bosco en el 1885 en la casa de Nizza Monferrato (AT), Italia: “La Madonna passeggia in questa casa e la copre con il suo manto” (cf. Cronistoria V, 51-52) – está acompañada por un elemento gráfico azul y rosa, que representa el manto de María.

    El Logo acompaña el Trienio de preparación al 150° de la Fundación  del Instituto FMA (1872-2022) abierto oficialmente por la Madre General de las Hijas de María Auxiliadora, Sor Yvonne Reungoat el 5 de agosto de 2019, desde la habitación de Madre Mazzarello en Mornese (AL) – Italia.
    `,
    img: './../../assets/Logos_APP/Logo Español-02.png',
    truncating : true
  }
  ];

  // Show more/less
  public limit: number = 40;

}
