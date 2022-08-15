import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token.storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const baseUrl = environment.apiUrl + '/visitante';
@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
    });
    return this.http.post(baseUrl, data, {headers: reqHeader});
  }

  alterarSenha(id: any, data:any, token:any): Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put(baseUrl + "/alterar-senha" + id, data, {headers: reqHeader});
  }
  
  }
/*
constructor() {private authService: AuthService | undefined,  private tokenStorage: TokenStorageService) {}

public cadastrar (nome: string, sobrenome: string, email: string, senha: string): Promise<boolean> {
  return new Promise<boolean> (
    (executor, reject) => {
      this.authService.login(nome, sobrenome, email, senha).subscribe(
        (data:any) => {
          this.tokenStorage.saveToken(data.token)
          this.tokenStorage.saveUser(email)
          executor(true)
        }, 
        (error: any) => {
          reject(error)
        }
      );
    },
  ),
}*/


