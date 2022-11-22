import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

  private apiUrl: string = environment.baseUrl + 'producto';

  constructor(private http: HttpClient) {}

 // getproducto(): Observable<Producto[]> {
 //   return this.http.get<Producto[]>(this.apiUrl);
 // }

  //getServicioMascota(id: string): Observable<Producto> {
  //  return this.http.get<Producto>(this.apiUrl + '/' + id);
  //}
}
