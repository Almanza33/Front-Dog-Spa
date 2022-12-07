import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicioMascotas } from './servicioMascotas';


@Injectable({
  providedIn: 'root'
})
export class ServicioMascotasService {
  private apiUrl: string = environment.baseUrl + 'serviciosMascotas';

  constructor(private http: HttpClient) { }

  getServiciosMascotas(): Observable<ServicioMascotas[]> {
    return this.http.get<ServicioMascotas[]>(this.apiUrl);
  }
}
