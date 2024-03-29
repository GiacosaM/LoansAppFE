import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Persona } from '../interfaces/persona';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = '/api/Person/getall';
  private myApuUrl1: string = '/api/Person/';
  


  constructor( private http: HttpClient,
    private _snackBar: MatSnackBar) { }

  getPersonas ():Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getPersona(id: number):Observable<Persona> {
    return this.http.get<Persona>(`${this.myAppUrl}${this.myApuUrl1}${id}`);
  }

  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApuUrl1}${id}`)
  }

  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.myAppUrl}${this.myApuUrl1}`, persona);
  }

  mensajeExito(mensaje:string) {
    this._snackBar.open(mensaje, '', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }

}
