import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ofertaSedesDetail } from './ofertaSede-detail';

const API_URL='../../asserts/'
const sedes='Sedes.json'

@Injectable({
  providedIn: 'root'
})
export class ofertaSedeService {
  private apiUrl: string = environment.baseUrl + 'ofertaSedes';
constructor(private http:HttpClient) { }
  getOfertaSedes(): Observable<ofertaSedesDetail[]> {
    return this.http.get<ofertaSedesDetail[]>(this.apiUrl);
  }
  getOfertaSede(id: string): Observable<ofertaSedesDetail> {
    return this.http.get<ofertaSedesDetail>(this.apiUrl + '/' + id);
  }
}
