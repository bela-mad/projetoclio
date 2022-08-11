import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  //   Método real do componente (mudar apiURL depois)
  //
  //   logarVisitante() {
  //     return this.http.post(this.apiURL);
  //   }

  //   Método exemplo
  //
  //   listarTodosProdutos() {
  //     this.http
  //       .get(`${this.apiURL}/produtos`)
  //       .subscribe((resultado) => console.log(resultado));
  //   }
}
