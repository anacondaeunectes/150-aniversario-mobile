import { Component } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
})
export class SplashscreenComponent implements ViewDidEnter{

  splash = true;

  constructor(private router:Router) { }

  ionViewDidEnter(): void {
    setTimeout( () => {
      console.log("SPLASH");
      this.splash = false;
      this.router.navigateByUrl('home');
    }, 6000)
  }

}