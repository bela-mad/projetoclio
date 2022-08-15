import { VisitanteService } from 'src/app/core/services/visitante.service';
import { AlteraSenhaVisitanteDto } from './../../core/model/alteraSenhaVisitanteDto';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {
  id?: any
  alterarSenha: AlteraSenhaVisitanteDto

  constructor
  (
    private cadastroService: VisitanteService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) 
  {
    this.alterarSenha = new AlteraSenhaVisitanteDto
  }

  ngOnInit() {
    this.id = this.tokenStorage.getVisitanteId()
  }
  alterarSenhaVisitante() {
    const data = {
      ...this.alterarSenha,
   }

    
    this.cadastroService.alterarSenha(this.id, data, this.tokenStorage.getToken())
      .subscribe({
        next: (res) => {
          alert('Senha alterada com Sucesso')
          this.router.navigate([''])
        },
        error: (e) => console.error(e)
      })
  }

}
