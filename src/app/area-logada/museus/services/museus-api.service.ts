import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MuseusApiService {
  baseUrl = environment.apiUrl + '/museus';

  constructor(private http: HttpClient) {}

  getAllMuseus(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl)
      .pipe(map((data: any) => data.data.results));
  }

  getAllMuseusPorNome(name: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?name=${name}`);
  }
}
