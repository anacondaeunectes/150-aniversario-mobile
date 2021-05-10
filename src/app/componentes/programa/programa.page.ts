import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api.service";
import { Acto } from "../../modelos/acto";

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {

  constructor(private servicio:ApiService) { }

  actos:Acto[]

  ngOnInit() {
   this.servicio.getActos().then(data => console.log(data)).catch(error => console.log("hola", error))
    
  }

}
