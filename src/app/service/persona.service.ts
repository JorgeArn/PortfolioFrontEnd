import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = environment.URL + '/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public save(perso: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', perso);
  }

  public update(id: number, perso: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, perso);
  }

  
}
