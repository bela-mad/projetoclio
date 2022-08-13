import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Cadastro } from '../cadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  inserirCadastro(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(
      'http://api-passaporteclio.herokuapp.com/visitante',
      cadastro
    );
  }
}
