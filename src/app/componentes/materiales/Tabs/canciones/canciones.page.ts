import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl, Howler} from 'howler';
export interface Track {
  name: string;
  path:string;
}

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.page.html',
  styleUrls: ['./canciones.page.scss'],
})
export class CancionesPage implements OnInit {

playlist: Track[]=[
  {
    name:'Cancion1',
    path:'https://www.bensound.com/bensound-music/bensound-dubstep.mp3'
  },
  {
    name:'Cancion2',
    path:'https://www.bensound.com/bensound-music/bensound-betterdays.mp3'
  },
  {
    name:'Cancion3',
    path:'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
  },
  {
    name:'Cancion1',
    path:'https://www.bensound.com/bensound-music/bensound-dubstep.mp3'
  },
  {
    name:'Cancion2',
    path:'https://www.bensound.com/bensound-music/bensound-betterdays.mp3'
  },
  {
    name:'Cancion3',
    path:'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
  },
  {
    name:'Cancion1',
    path:'https://www.bensound.com/bensound-music/bensound-dubstep.mp3'
  },
  {
    name:'Cancion2',
    path:'https://www.bensound.com/bensound-music/bensound-betterdays.mp3'
  },
  {
    name:'Cancion3',
    path:'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
  },
  {
    name:'Cancion1',
    path:'https://www.bensound.com/bensound-music/bensound-dubstep.mp3'
  },
  {
    name:'Cancion2',
    path:'https://www.bensound.com/bensound-music/bensound-betterdays.mp3'
  },
  {
    name:'Cancion3',
    path:'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
  },
  {
    name:'Cancion1',
    path:'https://www.bensound.com/bensound-music/bensound-dubstep.mp3'
  },
  {
    name:'Cancion2',
    path:'https://www.bensound.com/bensound-music/bensound-betterdays.mp3'
  },
  {
    name:'Cancion3',
    path:'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
  }
]

activeTrack:Track =null;
player:Howl = null;
isPlaying=false;
progress=0;
@ViewChild('range',{static:false}) range: IonRange
  constructor() { }


  start(track:Track){
    
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src:[track.path],
      
      onplay:()=>{
        console.log("on play")
        this.activeTrack=track;
        this.isPlaying=true;
        this.updateProgress();
      },
      onend:()=>{
        console.log("on end")
      }
    });
    console.log(track.path)
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
  next(){
    let index =  this.playlist.indexOf(this.activeTrack);
    if(index != this.playlist.length-1){
      this.start(this.playlist[index + 1]);

    } else{
      this.start(this.playlist[0]);
    }
  }
  prev(){
    let index =  this.playlist.indexOf(this.activeTrack);
    if(index > 0){
      this.start(this.playlist[index -1]);

    } else{
      this.start(this.playlist[this.playlist.length -1]);
    }
  }
  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue/100));

  }
  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek/this.player.duration()) *100 || 0;
    setTimeout(() =>{
      this.updateProgress();
    },100)
    }
  
  ngOnInit() {
  }

}
