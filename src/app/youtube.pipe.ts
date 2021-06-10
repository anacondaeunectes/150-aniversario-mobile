import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom : DomSanitizer) {
    
  }

 /**
  * Transforma la url pasada a una segura 
  * @param value 
  * @returns 
  */
  transform(value){
    console.log(value);
    
    
    return this.dom.bypassSecurityTrustResourceUrl(value)
    
  }
  

}
