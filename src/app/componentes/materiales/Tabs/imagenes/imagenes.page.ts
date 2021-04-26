import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../../../image-modal/image-modal.page';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  

  constructor(private http:HttpClient, private modalController: ModalController) { 
    this.loadImages();
  }

  imageList = [];
  nextPage='https://picsum.photos/v2/list?page=1';

  loadImages(){
    this.http.get<any[]>(this.nextPage, {observe:'response'}).subscribe(res =>{
      console.log('res:',res);
      this.nextPage=this.parse_link_header(res.headers.get('Link'))['next']
      this.imageList = this.imageList.length ==0 ? res.body : [...this.imageList,...res.body];
    })
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

  parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
    return links;
  }  
  imagenes = [
    {
      img:"./../../../../../assets/images/background.jpg"
    },
    {
      img:"https://es.rankiapro.com/wp-content/uploads/2019/08/fondo-tecnologico-preferido-selectores.jpg"
    },
    {
      img:"https://img.freepik.com/vector-gratis/fondo-acuarela-cielo-estrellado-ensueno_79603-883.jpg?size=626&ext=jpg"
    },
    {
      img:"https://amymhaddad.s3.amazonaws.com/morocco-blue.png"
    }
  ]
  ngOnInit() {
  }

}
