import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token.storage.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  cadastrar(nome: string, sobrenome: string, email: string, senha: string) {
    throw new Error('Method not implemented.');
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

}
