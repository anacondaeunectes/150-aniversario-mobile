import { Component, OnInit } from '@angular/core';
import * as countdown from "countdown";

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.scss'],
})
export class CuentaAtrasComponent implements OnInit {

  tiempoRestante:string = '';

  /**
   * Fecha del aniversario. La cuenta atrás gira en torno a esta fecha
   */
  readonly fechaAniversario:Date = new Date(2021, 4, 11, 19);

  /**
   * Número de cifras significativas a mostrar. Ejemplo: (Suponiendo 2 cifras significativas):
   *  - Si queda más de un año para la fecha, solo mostrará los años y los meses restantes.
   *  - Cuando quede menos de un año, mostrará los meses y los días restantes.
   *  - Cuando quedes menos de un día, mostrará los días y horas restantes,
   *  - ...
   */
  readonly maxCifras:number = 2;

  /**
   * Labels en español para cambiar la localización del idioma. La coma anterior a cada label es usada como separador para poder maquetar a continuación
   */
  readonly esLabels = {
    singular: ',milisegundo|,segundo|,minuto|,hora|,día|,semana|,mes|,año|,década|,siglo|,milenio',
    plural: ',milisegundos|,segundos|,minutos|,horas|,días|,semanas|,meses|,años|,décadas|,siglos|,milenios',
    last: ',',
    delim: ',',
    empty: 'ahora'
  }


  constructor() { }

  ngOnInit() {
    
    this.changeLocalizationToES();

    this.startCountdown(this.fechaAniversario, this.maxCifras);
  }

  /**
   * Configuración de la cuenta atras a través de la función principal ( countdown() ) de la librería usada. Esta acepta, además de la fecha y las cifras significativas a mostrar, un callback con el que poder asginar el tiempo restante a un elemento HTML.
   * @param fecha Fecha cuenta atrás
   * @param maxCifras cifras significativas a mostrar
   */
  startCountdown(fecha:Date, maxCifras:number){
    countdown(
      fecha,
      ts => {
        this.tiempoRestante = ts.toString();
        // document.getElementById('countdown__tiempoRestante').innerHTML = ts.toHTML("span");
        // console.log(this.tiempoRestante)
      },
      null,
      maxCifras);
  }

  /**
   * Cambia los labels de la localización del idioma de la librería 'countdown' a labels personalizados en español en la @var esLabels
   */
  changeLocalizationToES(){
    countdown.setLabels(
      this.esLabels.singular,
      this.esLabels.plural,
      this.esLabels.last,
      this.esLabels.delim,
      this.esLabels.empty
    )
  }

  /**
   * Resetea los labels al idioma por defecto(inglés)
   */
  resetLocalization(){
    countdown.resetLabels();
  }
}
