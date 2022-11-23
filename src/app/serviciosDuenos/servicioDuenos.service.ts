import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ServiciosDuenos} from './ServiciosDuenos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDuenosService {

  private apiUrl: string = environment.baseUrl + 'serviciosDuenos';

constructor(private http: HttpClient) { }

getServiciosDuenos(): Observable<ServiciosDuenos[]> {
  return this.http.get<ServiciosDuenos[]>(this.apiUrl);
}


}
