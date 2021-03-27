import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
})
export class PruebaComponent implements OnInit {

  links = [
    {title: 'Himno', icon:'accessibility'},
    {title: 'Logo', icon:'accessibility'},
    {title: 'Historia', icon:'accessibility'},
    {title: 'Saludos', icon:'accessibility'}
  ]

  constructor() { }

  ngOnInit() {}

}
