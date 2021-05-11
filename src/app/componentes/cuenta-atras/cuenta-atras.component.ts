import { Component, OnInit } from '@angular/core';
import * as countdown from "countdown";

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.scss'],
})
export class CuentaAtrasComponent implements OnInit {

  /**
   * String que contiene separado por comas(,) los valores y las unidades del tiempo restante hasta "fechaAniversario". Un ejemplo del formato es: 1,año,3,meses,4,días ó 5,horas,4,minutos,38,segundos. Este formato permite que a través de la pipe "formateo-cuenta-atras" se puedan obtener la unidad y su valor correspondiente para luego maquetarlos a placer.
   */
  tiempoRestante:string = '';

  /**
   * Fecha del aniversario. La cuenta atrás gira en torno a esta fecha.
   * la última unidad mostrada siempre es redondeada por exceso. Si quedasen 1 año, 3 meses y 10 días y solo estuviesemos mostrando las dos cifras significativas mayores (años y meses en este caso), mostraría 1 año y 4 meses ya que redondea los meses a 4 al quedar 3 meses y varios días.
   * OJO - IMPORTANTE : Los meses van de 0 a 11 siendo enero el 0 y diciembre el 11 (agosto por tanto es el 7)
   */
  fechaAniversario:Date = new Date(2021, 4, 5);

  /**
   * Número de cifras significativas a mostrar. Ejemplo: (Suponiendo 2 cifras significativas):
   *  - Si queda más de un año para la fecha, solo mostrará los años y los meses restantes.
   *  - Cuando quede menos de un año, mostrará los meses y los días restantes.
   *  - Cuando quedes menos de un día, mostrará los días y horas restantes,
   *  - ...
   */
  readonly maxCifras:number = 2;

  /**
   * Unidades temporales a usar en la cuenta atrás. Permite también el uso de unidades como la semana. 
   */
  readonly unidadesTemporales = countdown.YEARS|countdown.MONTHS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS;

  /**
   * Labels en español para cambiar la localización del idioma. La coma anterior a cada label es usada como separador para poder maquetar a continuación (pipe "formateo-cuenta-atras")
   */
  readonly esLabels = {
    singular: ',milisegundo|,segundo|,minuto|,hora|,día|,semana|,mes|,año|,década|,siglo|,milenio',
    plural: ',milisegundos|,segundos|,minutos|,horas|,días|,semanas|,meses|,años|,décadas|,siglos|,milenios',
    last: ',',
    delim: ',',
    empty: ''
  }


  constructor() { }

  ngOnInit() {
    
    let gg = new Date();

    gg.setMinutes(gg.getMinutes() + 1, 20);

    console.log(gg)

    this.fechaAniversario = gg;

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
        // Condicional para controlar que todavía esté en la cuenta atrás. En caso de que "ts.value" sea positivo significaría que ya ha terminado la cuenta atrás
        if(ts.value <= 0){
          console.log(this.tiempoRestante)
          this.tiempoRestante = ts.toString();
        }else{

          //TODO - Que hacer cuando termine la cuenta atrás. ¿Animación? -> 3...2...1... ¡{{ animación }}!
        }
      },
      this.unidadesTemporales,
      maxCifras
    );
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
}
