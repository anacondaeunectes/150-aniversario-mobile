import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl, Howler} from 'howler';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
export interface Track {
  id: string;
  url:string;
}

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.page.html',
  styleUrls: ['./canciones.page.scss'],
})
export class CancionesPage implements OnInit {

playlist: Track[]

activeTrack:Track =null;
player:Howl = null;
isPlaying=false;
progress=0;
@ViewChild('range',{static:false}) range: IonRange
  constructor(public router:Router,private servicio:ApiService) { }
  /**
   * Usa el componente router para navegar al menú principal
   */
  atras(){
    this.router.navigateByUrl('home'); 
    this.player.stop();
  }
  /**
   * Inicia la canción
   * @param himno parámetro de donde se va a buscar la url de la canción
   */
  start(track:Track){
    
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src:[track.url],
      html5:true,
      
      
      onplay:()=>{
        console.log("on play")
        /**
         * Se guarda la canción como la canción activa
         */
        this.activeTrack=track;
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
    console.log(track.url)
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
   * Busca la siguiente canción para reproducir
   */
  next(){
    let index =  this.playlist.indexOf(this.activeTrack);
    if(index != this.playlist.length-1){
      this.start(this.playlist[index + 1]);

    } else{
      this.start(this.playlist[0]);
    }
  }
  /**
   * Busca la anterior canción para reproducir
   */
  prev(){
    let index =  this.playlist.indexOf(this.activeTrack);
    if(index > 0){
      this.start(this.playlist[index -1]);

    } else{
      this.start(this.playlist[this.playlist.length -1]);
    }
  }
  /**
     * Si el usuario modifica la barra de proceso se actualiza también el audio que se está reproduciendo
     */
  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue/100));

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
   * rellena el array con los datos traidos del back al iniciar la página
   */
  ngOnInit() {
    this.servicio.getMaterialCanciones().then(data =>console.log( this.playlist=data))
  }

}
