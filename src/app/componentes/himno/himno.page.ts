import { Component, OnInit, ViewChild } from '@angular/core';
import {Howl} from 'howler';
import { ApiService } from "../../servicios/api.service";
import { himno } from "../../modelos/himno";
import { IonRange, ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { VideoYModalPage } from '../video-y-modal/video-y-modal.page';
import { medio } from 'src/app/modelos/medio';
import {Router} from '@angular/router';

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
  constructor(private servicio:ApiService,private modalController: ModalController, public router:Router) { }

  /**
   * rellena el array con los datos traidos del back al iniciar la página
   */
  ngOnInit() {
    this.servicio.getHimnos().then(data => console.log(this.playlist=data)).catch(error => console.log("hola", error))
  }

  /**
   * Usa el componente router para navegar al menú principal
   */
  atras(){
    this.player.stop();
    this.router.navigateByUrl('home');
  }

  /**
   * Inicia la canción
   * @param himno parámetro de donde se va a buscar la url de la canción
   */
  start(himno:himno){
    let url
    himno.medios.filter(x => x.tipo == "audio/mp3").forEach(x => url=x.url)
    
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      
      src:[url],
      html5:true,
      
      onplay:()=>{
        
        console.log("on play")
        /**
         * Se guarda la canción como la canción activa
         */
        this.activeTrack=himno;
        /**
         * booleano a true para marcar que una canción está sonando en el momento
         */
        this.isPlaying=true;
        /**
         * Actualiza la barra de reproducción 
         */
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
  /**
   * Pausa o reanuda la canción 
   * @param pause booleano que cambia según una canción estaba sonando o ya estaba parada
   */
  togglePlayer(pause){
    this.isPlaying=!pause;
    if(pause){
      this.player.pause();
    }else{
      this.player.play();
    }

  }
  /**
   * Actualiza el progreso de la barra de reproducción
   */
  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek/this.player.duration()) *100 || 0;
    setTimeout(() =>{
      this.updateProgress();
    },100)
    }

    /**
     * Abre un video en un modal creado a parte
     * @param himno parámetro de donde se va a buscar la url del video
     */
    async openVideo(himno:himno) {
      let video
      /**
       * filtramos el himno buscandoo la url del vídeo
       */
      himno.medios.filter(x => x.tipo == "video/mp4").forEach(x =>video = x.url)
      console.log(video)
      /**
       * Creamos el  modal y le pasamos la url del vídeo
       */
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
     * Valida si existe una url de tipo audio/mp3 
     * @param himno 
     * @returns url de un audio
     */
    validateAudio(himno:himno){
      return himno["medios"].find(x => x.tipo == "audio/mp3")
    }
    /**
     * Valida si existe una url de tipo video/mp4
     * @param himno 
     * @returns url de un video
     */
    validateVideo(himno:himno){
      return himno["medios"].find(x => x.tipo == "video/mp4")
    }

    /**
     * Si el usuario modifica la barra de proceso se actualiza también el audio que se está reproduciendo
     */
    seek(){
      let newValue = +this.range.value;
      let duration = this.player.duration();
      this.player.seek(duration * (newValue/100));
  
    }
}
