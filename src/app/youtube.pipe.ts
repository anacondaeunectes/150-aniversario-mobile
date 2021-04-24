import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom : DomSanitizer) {
    
  }

 /* transform(value) : SafeResourceUrl {
    console.log(value);
    
    
    return this.dom.sanitize(SecurityContext.RESOURCE_URL,this.dom.bypassSecurityTrustResourceUrl(value))
    
  }
  */
  transform(value){
    console.log(value);
    
    
    return this.dom.bypassSecurityTrustResourceUrl(value)
    
  }
  

}
