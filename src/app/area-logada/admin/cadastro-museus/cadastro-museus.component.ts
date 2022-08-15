import { MuseuService } from './../../../core/services/museu.service';
import { MuseusDto } from './../../../core/model/museusDto';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';

@Component({
  selector: 'app-cadastro-museus',
  templateUrl: './cadastro-museus.component.html',
  styleUrls: ['./cadastro-museus.component.css']
})
export class CadastroMuseusComponent implements OnInit {
  museu: MuseusDto

  constructor(
    private museuService: MuseuService, 
    private tokenStorage: TokenStorageService
  )
  {
    this.museu = new MuseusDto
  }

  ngOnInit() {
  }

  limparCampos(){
    this.museu = new MuseusDto
  }

 
  cadastrarMuseu() {
    const data = {
      ...this.museu,
   }

    
    this.museuService.create(data, this.tokenStorage.getToken())
      .subscribe({
        next: (res) => {
          alert('Museu Cadastrado com Sucesso')
         this.limparCampos();
        },
        error: (e) => console.error(e)
      })
  }

}
