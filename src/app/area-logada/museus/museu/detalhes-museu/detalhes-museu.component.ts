import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-museu',
  templateUrl: './detalhes-museu.component.html',
  styleUrls: ['./detalhes-museu.component.css'],
})
export class DetalhesMuseuComponent implements OnInit {
  nome: String = '';
  descricaoMuseu: String = '';
  funcionamentoMuseu: String = '';
  urlFoto: String = '';
  urlSite: String = '';
  urlInstagram: String | undefined;
  endereco: String = '';
  cep: String = '';
  rua: String = '';
  numero: String = '';
  bairro: String = '';
  cidade: String = '';
  estado: String = '';
  pais: String = '';
  avaliacao: String = '';
  nota: String = '';
 

  constructor(private router: Router) {
    /*if (this.router.getCurrentNavigation().extras?.state != null) {
      this.museu = this.router.getCurrentNavigation().extras.state;
    }*/
  }
  

  ngOnInit() {}
}
