import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-museu',
  templateUrl: './detalhes-museu.component.html',
  styleUrls: ['./detalhes-museu.component.css']
})
export class DetalhesMuseuComponent implements OnInit {

 @Input() nome: String | undefined ;
 @Input() descricaoMuseu: String | undefined ;
 @Input() funcionamentoMuseu: String | undefined ;
 @Input() urlFoto: String | undefined ;
 @Input() urlSite: String | undefined ;
 @Input() urlInstagram: String | undefined ;
 @Input() endereco: String | undefined ;
 @Input() cep: String | undefined ;
 @Input() rua: String | undefined ;
 @Input() numero: String | undefined ;
 @Input() bairro: String | undefined ;
 @Input() cidade: String | undefined ;
 @Input() estado: String | undefined ;
 @Input() pais: String | undefined ;
 @Input() avaliacao: String | undefined ;

  constructor() { }

  ngOnInit() {
  }

}
