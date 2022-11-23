import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {packServicios} from './packServicios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackServiciosService {
  private apiUrl: string = environment.baseUrl + 'packs';

constructor(private http: HttpClient) { }

getPacks(): Observable<packServicios[]> {
  return this.http.get<packServicios[]>(this.apiUrl);
}

}
