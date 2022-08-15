import { LoginService } from 'src/app/core/services/login.service';

import { VisitanteDto } from './../../core/model/visitanteDto';
import { Component, OnInit } from '@angular/core';
import { VisitanteService } from 'src/app/core/services/visitante.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastro: VisitanteDto 
  
  
  constructor(
    private cadastroService: VisitanteService,
    private loginService: LoginService,
    private router: Router
  ) 
  { 
    this.cadastro = new VisitanteDto
  }

  ngOnInit() {
  
  }
  cadastrarVisitante() {
    const data = {
      ...this.cadastro,
   }

    this.cadastroService.create(data)
      .subscribe({
        next: (res) => {
          alert('Usuário Cadastrado com Sucesso')
          this.loginService.logar(this.cadastro.user.email, this.cadastro.user.senha).then(
            (value: boolean) => {
              if(value === true){
                this.router.navigate(['inicio'])
              }
            }
          ).catch(
            (error: any) => {
              console.error(error)
            }
          )
        },
        error: (e) => console.error(e)
      })
  }


}
