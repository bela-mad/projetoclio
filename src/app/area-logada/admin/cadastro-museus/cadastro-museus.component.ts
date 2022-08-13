import { AuthService } from './../../../core/services/auth.service';
import { MuseuService } from './../../../core/services/museu.service';
import { EnderecoDto } from './../../../core/model/enderecoDto';
import { MuseusDto } from './../../../core/model/museusDto';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';

@Component({
  selector: 'app-cadastro-museus',
  templateUrl: './cadastro-museus.component.html',
  styleUrls: ['./cadastro-museus.component.css']
})
export class CadastroMuseusComponent implements OnInit {
  museu: MuseusDto = {
    id: 0,
    nome: '',
    descricaoMuseu: '',
    funcionamentoMuseu: '',
    urlFoto: '',
    urlSite: '',
    urlInstagram: '',
  };

  endereco: EnderecoDto = {
    id: 0,
    cep: '',
    rua: '',
    numero: 0,
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
  };

  constructor(
    private museuService: MuseuService, 
    private authService: AuthService, 
    private tokenStorage: TokenStorageService
  )
  {}

  ngOnInit() {
  }

  limparCampos(){
    this.museu = {
      id: 0,
      nome: '',
      descricaoMuseu: '',
      funcionamentoMuseu: '',
      urlFoto: '',
      urlSite: '',
      urlInstagram: '',
    };
    this.endereco = {
      id: 0,
      cep: '',
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
      estado: '',
      pais: '',
    };
  }

  getBearerToken(){
    return this.authService.login("admin@email.com", "123")
      .subscribe({
        next: (res) => {
          this.tokenStorage.saveToken(res.token)
        },
        error: (e) => console.error(e)
      })
  }

  cadastrarMuseu() {
    const data = {
      ...this.museu,
      endereco: this.endereco
    }

    
    this.getBearerToken()

    this.museuService.create(data, this.tokenStorage.getToken())
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Museu Cadastrado com Sucesso')
          this.limparCampos();
        },
        error: (e) => console.error(e)
      })
  }

}
