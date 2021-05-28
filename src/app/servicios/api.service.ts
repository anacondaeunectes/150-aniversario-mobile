import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Acto } from "../modelos/acto";
import { Saludo } from "../modelos/saludo";
import { historia } from '../modelos/historia';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  /**
   * Direccion API
   */
  baseUrl = environment.baseUrl;

  /**
   * Peticion GET que devuelve una promesa con un array de Actos
   */
  async getActos1(){
    
    return (await this.http.get<Acto[]>(this.baseUrl + "acts/listEverything.php").toPromise()).filter(data => data.categoria =="1");
  }
  async getActos2(){
    
    return (await this.http.get<Acto[]>(this.baseUrl + "acts/listEverything.php").toPromise()).filter(data => data.categoria =="2");
  }
  async getActos3(){
    
    return (await this.http.get<Acto[]>(this.baseUrl + "acts/listEverything.php").toPromise()).filter(data => data.categoria =="3");
  }

  /**
   * Peticion GET que devuelve una promesa con un array de Saludos
   * @returns 
   */
  async getSaludos(){

    return this.http.get<Saludo[]>(this.baseUrl + "greetings/list.php").toPromise();
  }


  /**
   * Peticion GET que devuelve una promesa con un array de Historias
   * @returns 
   */
  async getHistorias(){

    return this.http.get<historia[]>(this.baseUrl + "story/listEverything.php").toPromise();
  }
  async getHistoria(){
    
    return (await this.http.get<any[]>(this.baseUrl + "story/listEverything.php").toPromise());

    
  }
  async getMaterialImagenes(){
    
    return (await this.http.get<any[]>(this.baseUrl + "materials/list.php").toPromise()).filter(data => data.tipo =="1");;

    
  }
  async getMaterialCanciones(){
    
    return (await this.http.get<any[]>(this.baseUrl + "materials/list.php").toPromise()).filter(data => data.tipo =="2");;

    
  }
  async getHimnos(){
    
    return (await this.http.get<any[]>(this.baseUrl + "hymns/listEverything.php").toPromise());

    
  }

  async getVisitas(){
    
    return (await this.http.get<any[]>(this.baseUrl + "visits/listEverything.php").toPromise());

    
  }
  async getOraciones(){
    
    return (await this.http.get<any[]>(this.baseUrl + "pray/listEverything.php").toPromise());

  }



  
}
