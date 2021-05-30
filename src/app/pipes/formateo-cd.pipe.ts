import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateoCD'
})
export class FormateoCDPipe implements PipeTransform {

  transform(value: string, orden:number): string {
    return value.split(',')[orden];
  }

}