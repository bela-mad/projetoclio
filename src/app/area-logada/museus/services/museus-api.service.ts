import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MuseusApiService {

  PUBLIC_KEY = '1a8574e355a16e77491e7a2835e6e906';
  HASH = 'f82c2bb2813e6ff54504fe3f45d2e122';
  URL_API_GET = `https://api-passaporteclio.herokuapp.com/museus`;
  URL_API_SUFIX = `?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  URL_API = '';

  constructor(private http: HttpClient) {}

  getAllMuseus(): Observable<any> {
    this.URL_API = this.URL_API_GET + this.URL_API_SUFIX;
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }

  getAllMuseusPorNome(name: any): Observable<any> {
    this.URL_API = this.URL_API_GET + this.URL_API_SUFIX;
    return this.http.get<any>(`${this.URL_API}&name=${name}`).pipe(
      map((data: any) => {
        return data.data.results;
      })
    );
  }
}



