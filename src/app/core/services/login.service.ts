import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { VisitanteService } from './visitante.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authService: AuthService,  
    private tokenStorage: TokenStorageService,
    private visitanteService: VisitanteService  
  ) {}

  public logar(email: string, senha: string): Promise<boolean> {
    return new Promise<boolean> (
      (executor, reject) => {
        this.authService.login(email, senha).subscribe(
          (data:any) => {
            this.tokenStorage.saveToken(data.token)
            this.tokenStorage.saveUser(data.username, data.userId)
            if(data.username != "admin@email.com"){
              this.obterVisitanteId()
            }
            executor(true)            
          }, 
          (error: any) => {
            reject(error)
          }
        );
      },
    );
  }

  public obterVisitanteId(){
    return new Promise<boolean> (
      (executor, reject) => {
        this.visitanteService.obterVisitantePorUsuarioLogado(this.tokenStorage.getToken()).subscribe(
          (data:any) => {
            this.tokenStorage.saveVisitante(data.id, data.nome)
            executor(true)
          },
          (error: any) => {
            reject(error)
          }
        )
      }
    )
  }
}
