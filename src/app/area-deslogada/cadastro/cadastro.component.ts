import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro';
import { CadastroService } from './service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
 cadastros = [] as any;

 cadastro:Cadastro = {
  nome: "",
  sobrenome: "",
  email:"",
  senha:"",
 }
  constructor(private service: CadastroService) {
    this.cadastro = new Cadastro();
   }

  ngOnInit():void {
  }

  onSubmit(){
    this.service
    .inserirCadastro(this.cadastro)
    .subscribe( responde => console.log(responde));
  }

}
