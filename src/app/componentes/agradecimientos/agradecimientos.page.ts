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

  /**
   * Usa el componente router para navegar al menú principal
   */
  atras(){
    this.router.navigateByUrl('home');
  }
  /**
   * Lista con las personas a agradecer 
   */
  public agradecimientos_nervion = [{
    name: 'Daniel García Villalba',
    dispositivo: 'Aplicación móvil',
    img: './../../assets/images/agradecimientos/danielgarcia.png',
    truncating : true
  },
  {
    name: 'Pedro Francisco Arévalo Alcaide',
    dispositivo: 'Aplicación móvil',
    img: './../../assets/images/agradecimientos/pedroarevalo.png',
    truncating : true
  },
  {
    name: 'Pablo Gutiérrez Martínez',
    dispositivo: 'Aplicación móvil',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'José Francisco Ruso Álvarez',
    dispositivo: 'Panel de administración',
    img: './../../assets/images/agradecimientos/ruso.jpg',
    truncating : true
  },
  {
    name: 'Miguel Alcántara Montero',
    dispositivo: 'Panel de administración',
    img: './../../assets/images/agradecimientos/miguealcantara.jpg',
    truncating : true
  },
  {
    name: 'Rafael Ramírez Román',
    dispositivo: 'Panel de administración',
    img: './../../assets/images/saludos/madreyvonne.jpg',
    truncating : true
  },
  {
    name: 'Francisco José Caro Carazo',
    dispositivo: 'Panel de administración',
    img: './../../assets/images/agradecimientos/curro.jpg',
    truncating : true
  },
  {
    name: 'Manuel Torres Molina',
    dispositivo: 'Tutor docente',
    img: './../../assets/images/agradecimientos/manolo.jpg',
    truncating : true
  },
  ];

  public agradecimientos_leon = [
    {
    name: 'Gabriel Sánchez Amorín',
    dispositivo: 'Backend',
    img: './../../assets/images/agradecimientos/gabileon.png',
    truncating : true
  },
  {
    name: 'Adrián Blanco Martínez',
    dispositivo: 'Backend',
    img: './../../assets/images/agradecimientos/adrianleon.jpg',
    truncating : true
  },
  {
    name: 'Diego García Ordás',
    dispositivo: 'Tutor docente',
    img: './../../assets/images/agradecimientos/diegotutor.png',
    truncating : true
  }
];

public agradecimientos_otros = [
  {
  name: 'María Fernanda Bastidas Zapata',
  dispositivo: 'Diseñadora Logotipo',
  img: './../../assets/images/saludos/madreyvonne.jpg',
  truncating : true
},
{
  name: 'Juan Javier Bernal García',
  dispositivo: 'Compositor del himno',
  img: './../../assets/images/saludos/madreyvonne.jpg',
  truncating : true
}
];

}
