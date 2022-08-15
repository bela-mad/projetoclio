import { CadastroService } from 'src/app/core/services/cadastro.service';
import { AlteraSenhaVisitanteDto } from './../../core/model/alteraSenhaVisitanteDto';
import { Component, OnInit } from '@angular/core';
import { MuseuService } from 'src/app/core/services/museu.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService
  ) 
  {
    this.alterarSenha = new AlteraSenhaVisitanteDto
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
  }
  alterarSenhaVisitante() {
    const data = {
      ...this.alterarSenha,
   }

    
    this.cadastroService.alterarSenha(this.id, data, this.tokenStorage.getToken())
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Museu Cadastrado com Sucesso')
        },
        error: (e) => console.error(e)
      })
  }

}
