import { Component, OnInit } from '@angular/core';
import { Vocacional } from "../../modelos/vocacional";
import { medio } from "../../modelos/medio";

@Component({
  selector: 'app-vocacional',
  templateUrl: './vocacional.page.html',
  styleUrls: ['./vocacional.page.scss'],
})
export class VocacionalPage implements OnInit {

  constructor() { }

  vocacionalArray:Vocacional[] = [
    {
      descripcion: "Ven a celebrar con nosotros el 150 aniversario de la creación de la inspectoría",
      enUso:"",
      fecha: null,
      titulo: "Fiesta 150 aniversario",
      ubicacion: "Colegio Salesianas María Auxiliadora",
      medios: [
       {
         tipo: "image/jpg",
         url:"https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
       }
     ]
    }
  ]

  ngOnInit() {
    // console.log(this.validateImg(this.vocacionalArray[0]))
  }

  getPrimerMedio(item:Vocacional):medio{
    return item.medios[0];
  }

  validateImg(multimedia:medio){
    return multimedia.tipo == "image/jpg";

  }

  validateVideo(multimedia:medio){
    return multimedia.tipo == "video/mp4";

  }

  findUrl(item:Vocacional){
    let url
    
    return item["medios"].find(x => x.tipo == "image/jpg").url
  }



}