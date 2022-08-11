import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-museu',
  templateUrl: './detalhes-museu.component.html',
  styleUrls: ['./detalhes-museu.component.css']
})
export class DetalhesMuseuComponent implements OnInit {

 @Input() nome: String = '' ;
 @Input() descricaoMuseu: String = '' ;
 @Input() funcionamentoMuseu: String = '' ;
 @Input() urlFoto: String = '' ;
 @Input() urlSite: String = '' ;
 @Input() urlInstagram: String | undefined ;
 @Input() endereco: String = ''  ;
 @Input() cep: String = '' ;
 @Input() rua: String = ''  ;
 @Input() numero: String = '' ;
 @Input() bairro: String = '' ;
 @Input() cidade: String = '' ;
 @Input() estado: String = '' ;
 @Input() pais: String = '' ;
 @Input() avaliacao: String = ''  ;
 @Input() nota: String = '' ;

  constructor() { }

  ngOnInit() {
  }

}
