import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductoDetail } from './producto-Detail';
@Injectable({
  providedIn: 'root'
})
export class ProductosService{

  private apiUrl: string = environment.baseUrl + 'producto';

  constructor(private http: HttpClient) {}

  getproducto(): Observable<ProductoDetail[]> {
    return this.http.get<ProductoDetail[]>(this.apiUrl);
  }

  getServicioMascota(id: string): Observable<ProductoDetail> {
    return this.http.get<ProductoDetail>(this.apiUrl + '/' + id);
  }
}
