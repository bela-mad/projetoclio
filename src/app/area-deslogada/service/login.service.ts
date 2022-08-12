import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/area-deslogada/login/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiURL = 'https://api-passaporteclio.herokuapp.com/auth';
  httpClient: any;

  constructor(private http: HttpClient) {}

  logarVisitante(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiURL, login);
  }
}
