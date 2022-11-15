import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ofertaSedeDetail } from './ofertaSede-detail';

const API_URL='../../asserts/'
const sedes='Sedes.json'

@Injectable({
  providedIn: 'root'
})
export class ofertaSedeService {
  private apiUrl: string = environment.baseUrl + 'ofertaSedes';
constructor(private http:HttpClient) { }
  getOfertaSedes(): Observable<ofertaSedeDetail[]> {
    return this.http.get<ofertaSedeDetail[]>(this.apiUrl);
  }
  getOfertaSede(id: string): Observable<ofertaSedeDetail> {
    return this.http.get<ofertaSedeDetail>(this.apiUrl + '/' + id);
  }
}