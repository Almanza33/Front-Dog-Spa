import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Perro } from '../perro/Perro';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

  private apiUrl: string = environment.baseUrl + 'hallsOfFame';

  constructor(private http: HttpClient) { }

  getPerros(id:string): Observable<Perro[]> {
    return this.http.get<Perro[]>(this.apiUrl + '/' + id + '/perros');
  }



}
