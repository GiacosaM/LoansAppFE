import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = '/api/Person/getall';
  private myApuUrl1: string = '/api/Person/'


  constructor( private http: HttpClient) { }

  getPersonas ():Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getPersona(id: number):Observable<Persona> {
    return this.http.get<Persona>(`${this.myAppUrl}${this.myApuUrl1}${id}`);
  }


}
