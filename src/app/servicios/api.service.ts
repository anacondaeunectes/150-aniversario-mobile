import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Acto } from "../modelos/acto";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl=environment.baseUrl;

  /**
   * consigue todas las imagenes
   */
  async getActos(){
    
    return (await this.http.get<Acto[]>(this.baseUrl + "acts/list.php").toPromise()).filter(data => data.categoria =="1");

    
  }
  async getHistoria(){
    
    return (await this.http.get<any[]>(this.baseUrl + "story/list.php").toPromise());

    
  }

  
}
