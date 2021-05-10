import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agradecimientos',
  templateUrl: './agradecimientos.page.html',
  styleUrls: ['./agradecimientos.page.scss'],
})
export class AgradecimientosPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  atras(){
    this.router.navigateByUrl('home');
  }

}
