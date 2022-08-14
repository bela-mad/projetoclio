import { UserDto } from './../../core/model/userDto';
import { VisitanteDto } from './../../core/model/visitanteDto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { CadastroService } from 'src/app/core/services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  
  cadastro: VisitanteDto & UserDto = {
    id: 0,
    nome:'',
    sobrenome:'',
    email: '',
    senha: '',
  };

  /*user: UserDto{
    id: 0,
    email: '',
    senha: '',
  }*/

  constructor(private service: CadastroService, private router: Router, private tokenStorage: TokenStorageService) { 
  }

  ngOnInit(): void {
    this.tokenStorage.signOut()
  }

/*
  onSubmit() {
    this.service.cadastrar (this.cadastro.nome, this.cadastro.sobrenome, this.cadastro.email, this.cadastro.senha).then(
      (value: boolean) => {
        if(value === true){
          this.router.navigate(['inicio'])
        }else{
          alert('Preencha todos os campos!')
        }
      }
    ).catch(
      (error: any) => {
        console.error(error)
        alert('Escolha outro email!')
      }*/
    }
