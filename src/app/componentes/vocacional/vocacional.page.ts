import { Component, OnInit } from '@angular/core';
import { Vocacional } from "../../modelos/vocacional";
import { medio } from "../../modelos/medio";
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-vocacional',
  templateUrl: './vocacional.page.html',
  styleUrls: ['./vocacional.page.scss'],
})
export class VocacionalPage implements OnInit {

  vocacional;

  constructor(private servicioApi: ApiService) { }

  vocacionalArray:Vocacional[];

  ngOnInit() {
    // console.log(this.validateImg(this.vocacionalArray[0]))
    this.servicioApi.getVocacional().then(data => {this.vocacionalArray=data})
    setTimeout(x => {
      console.log(this.vocacionalArray)
    },5000)
  }

  getPrimerMedio(item:Vocacional):medio{

    return item.medios[0];
  }

   /**
     * Valida si existe una url de tipo image/jpg 
     * @param  multimedia
     * @returns url de un audio
     */
  validateImg(multimedia:medio){

    if(!multimedia){
      return false;
    }

    return multimedia.tipo == "image/jpg";

  }

  /**
     * Valida si existe una url de tipo video/mp4 
     * @param multimedia
     * @returns url de un video
     */
  validateVideo(multimedia:medio){
    return multimedia.tipo == "video/mp4";

  }

  /**
     * Valida si existe una url de tipo image/jpg 
     * @param item 
     * @returns url de un audio
     */
  findUrl(item:Vocacional){
    let url
    
    return item["medios"].find(x => x.tipo == "image/jpg").url
  }



}
