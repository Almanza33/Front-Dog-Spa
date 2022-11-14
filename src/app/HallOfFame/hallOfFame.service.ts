import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Perro } from '../perro/Perro';
import { HallOfFame } from './HallOfFame';
import { HallOfFameDetail } from './HallOfFame-detail';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

  private apiUrl: string = environment.baseUrl + 'hallsOfFame';

  constructor(private http: HttpClient) { }

  getAllHallsOfFame(): Observable<HallOfFame[]> {
    return this.http.get<HallOfFame[]>(this.apiUrl);
  }

  getHallOfFame(id:string): Observable<HallOfFameDetail> {
    return this.http.get<HallOfFameDetail>(this.apiUrl + "/" + id);
  }


}
