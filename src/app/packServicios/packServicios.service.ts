import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {packServiciosDetail} from './PackServicios-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackServiciosService {
  private apiUrl: string = environment.baseUrl + 'packs';

constructor(private http: HttpClient) { }

getPacks(): Observable<packServiciosDetail[]> {
  return this.http.get<packServiciosDetail[]>(this.apiUrl);
}

}
