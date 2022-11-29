import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { Observable } from 'rxjs';
import { Oferta } from './oferta'
import { catchError, Observable, throwError } from 'rxjs';
import { OfertaDetail } from './oferta-detail';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private apiUrl: string = environment.baseUrl + 'ofertas';

constructor(private http: HttpClient) { }

getOfertas(): Observable<OfertaDetail[]> {
  return this.http.get<OfertaDetail[]>(this.apiUrl).pipe(
    catchError((err) => throwError(() => new Error('error en el servicio')))
  );
}

getOferta(id: string): Observable<OfertaDetail> {
  return this.http.get<OfertaDetail>(this.apiUrl + '/' + id);
}

createOferta(book: OfertaDetail): Observable<OfertaDetail> {
  return this.http.post<OfertaDetail>(this.apiUrl, book);
}
}
