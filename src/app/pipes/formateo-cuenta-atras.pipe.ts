import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateo'
})
export class FormateoCuentaAtrasPipe implements PipeTransform {

  transform(value: string, orden:number): string {
    return value.split(',')[orden];
  }

}
