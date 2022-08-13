import { LoginForm } from '../model/loginForm';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
//import { Login } from 'src/app/area-deslogada/login/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authService: AuthService,  private tokenStorage: TokenStorageService) {}

  public logar(email: string, senha: string): Promise<boolean> {
    return new Promise<boolean> (
      (executor, reject) => {
        this.authService.login(email, senha).subscribe(
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
    );
  }
}
