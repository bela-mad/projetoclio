import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = environment.apiUrl + '/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const data = {
        email: email,
        senha: senha
    }

    return this.http.post<any>(
      AUTH_API, data, httpOptions
    );
  }
}