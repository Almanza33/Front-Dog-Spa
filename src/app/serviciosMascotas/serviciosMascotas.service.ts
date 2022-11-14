import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ServicioMascotasDetail } from './servicioMascotas-Detail';
@Injectable({
  providedIn: 'root'
})
export class ServiciosMascotasService{

  private apiUrl: string = environment.baseUrl + 'servicioMascotas';

  constructor(private http: HttpClient) {}

  getServicioMascotas(): Observable<ServicioMascotasDetail[]> {
    return this.http.get<ServicioMascotasDetail[]>(this.apiUrl);
  }

  getServicioMascota(id: string): Observable<ServicioMascotasDetail> {
    return this.http.get<ServicioMascotasDetail>(this.apiUrl + '/' + id);
  }
}
