import { Component, OnInit, ViewChild } from '@angular/core';
import {Howl, Howler} from 'howler';
import { ApiService } from "../../servicios/api.service";
import { himno } from "../../modelos/himno";
import { IonRange, ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { VideoYModalPage } from '../video-y-modal/video-y-modal.page';
import { medio } from 'src/app/modelos/medio';
@Component({
  selector: 'app-himno',
  templateUrl: './himno.page.html',
  styleUrls: ['./himno.page.scss'],
})
export class HimnoPage implements OnInit {

  activeTrack:himno =null;
  player:Howl = null;
  isPlaying=false;
  progress=0; 
  playlist: himno[]
  @ViewChild('range',{static:false}) range: IonRange
  constructor(private servicio:ApiService,private modalController: ModalController) { }


  ngOnInit() {
    this.servicio.getHimnos().then(data => console.log(this.playlist=data)).catch(error => console.log("hola", error))
  }

  start(himno:himno){
    let url
    himno.medios.filter(x => x.tipo == "audio/mp3").forEach(x => url=x.url)
    
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      
      src:[url],
      Html5: true,
      
      onplay:()=>{
        console.log("on play")
        this.activeTrack=himno;
        this.isPlaying=true;
        this.updateProgress();
      },
      onend:()=>{
        console.log("on end")
      }
    });
    console.log(url)
    console.log(this.activeTrack)
    console.log(this.isPlaying)
    this.player.play();
  }
  togglePlayer(pause){
    this.isPlaying=!pause;
    if(pause){
      this.player.pause();
    }else{
      this.player.play();
    }

  }
  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek/this.player.duration()) *100 || 0;
    setTimeout(() =>{
      this.updateProgress();
    },100)
    }

    async openVideo(himno:himno) {
      let video
      himno.medios.filter(x => x.tipo == "video/mp4").forEach(x =>video = x.url)
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

    validateAudio(himno:himno){
      return himno["medios"].find(x => x.tipo == "audio/mp3")
    }
    validateVideo(himno:himno){
      return himno["medios"].find(x => x.tipo == "video/mp4")
    }

    seek(){
      let newValue = +this.range.value;
      let duration = this.player.duration();
      this.player.seek(duration * (newValue/100));
  
    }
}
