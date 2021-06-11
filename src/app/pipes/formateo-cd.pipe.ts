import { Pipe, PipeTransform } from '@angular/core';

/**
 * Esta pipe se usa para el formato y diseño de la cuenta atrás en el splashscreen. Separa los datos según las comas.
 */
@Pipe({
  name: 'formateoCD'
})
export class FormateoCDPipe implements PipeTransform {

  transform(value: string, orden:number): string {
    return value.split(',')[orden];
  }

}