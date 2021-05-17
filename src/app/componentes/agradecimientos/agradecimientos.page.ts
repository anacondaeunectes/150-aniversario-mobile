import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  public agradecimientos = [{
    name: 'Daniel García Villalba',
    img: './../../assets/images/agradecimientos/danielgarcia.jpg',
    truncating : true
  },
  {
    name: 'Pedro Francisco Arévalo Alcaide',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'Pablo Gutiérrez Martínez',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'José Francisco Ruso Álvarez',
    img: './../../assets/images/agradecimientos/ruso.jpg',
    truncating : true
  },
  {
    name: 'Miguel Alcántara Montero',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'Rafael Ramírez Román',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'Francisco José Caro Carazo',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'Manuel Torres Molina',
    img: './../../assets/images/agradecimientos/manolo.jpg',
    truncating : true
  },
  ];

}
