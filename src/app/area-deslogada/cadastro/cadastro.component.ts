
import { VisitanteDto } from './../../core/model/visitanteDto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CadastroService } from 'src/app/core/services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastro: VisitanteDto 
  
  
  constructor(
    private cadastroService: CadastroService, 
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

    console.log(data)
    this.cadastroService.create(data)
      .subscribe({
        next: (res) => {
          alert('Usuário Cadastrado com Sucesso')
        },
        error: (e) => console.error(e)
      })
  }


}
