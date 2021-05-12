import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Acto } from "../modelos/acto";
import { Saludo } from "../modelos/saludo";
import { Historia } from '../modelos/historia';
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
  async getActos(){
    
    return (await this.http.get<Acto[]>(this.baseUrl + "acts/list.php").toPromise()).filter(data => data.categoria =="1");
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

    return this.http.get<Historia[]>(this.baseUrl + "story/list.php").toPromise();
  }

  
}
