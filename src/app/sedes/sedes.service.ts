import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sedes } from './Sedes';
import { SedesDetail } from './Sedes-detail';

const API_URL='../../asserts/'
const sedes='Sedes.json'

@Injectable({
  providedIn: 'root'
})
export class SedesService {
  private apiUrl: string = environment.baseUrl + 'sedes';
constructor(private http:HttpClient) { }
  getSedes():Observable<Sedes[]> {
    return this.http.get<Sedes[]>(API_URL+sedes)
  }

  getSedes(): Observable<SedesDetail[]> {
    return this.http.get<SedesDetail[]>(this.apiUrl);
  }

  getEditorial(id: string): Observable<EditorialDetail> {
    return this.http.get<EditorialDetail>(this.apiUrl + '/' + id);
  }
}
