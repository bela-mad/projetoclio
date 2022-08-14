import { Component, OnInit } from '@angular/core';
import { AvaliacaoDto } from 'src/app/core/model/avaliacaoDto';
import { CollectionModelAvaliacaoDto } from 'src/app/core/model/collectionModelAvaliacaoDto';
import { MuseusDto } from 'src/app/core/model/museusDto';
import { AvaliacaoService } from 'src/app/core/services/avaliacao.service';
import { MuseuService } from 'src/app/core/services/museu.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';

@Component({
  selector: 'app-perfil-visitante',
  templateUrl: './perfil-visitante.component.html',
  styleUrls: ['./perfil-visitante.component.css']
})
export class PerfilVisitanteComponent implements OnInit {
  museuSelecionado: MuseusDto
  listaMuseus: MuseusDto[] = []
  listaAvaliacoes: AvaliacaoDto[] = []

  constructor(
    private museuService: MuseuService,
    private tokenStorage: TokenStorageService,
    private avaliacaoService: AvaliacaoService
  ) 
  {
    this.museuSelecionado = new MuseusDto
  }

  ngOnInit() {
    this.listarTodosMuseus()
  }

  listarTodosMuseus(){
    this.museuService.findAll(this.tokenStorage.getToken())
    .subscribe({
      next: (data) => {
        console.log(data._embedded.museusDtoList)
        this.listaMuseus = data._embedded.museusDtoList
      },
      error: (e) => console.error(e)
    });
  }

  buscarInformacoesMuseuSelecionado(museuSel: MuseusDto){
    if(museuSel == null || museuSel.id == null || museuSel.id == 0){
      return;
    }

    this.listaAvaliacoes = []

    this.avaliacaoService.getAvaliacoesUsuario(this.tokenStorage.getUserId(), this.tokenStorage.getToken())
    .subscribe({
      next: (data: CollectionModelAvaliacaoDto) => {
        if(data){
          const map = new Map(Object.entries(data));
          map.forEach((value, key) => {
            if(key === museuSel.nome){
              const avaliacoes: AvaliacaoDto[] = JSON.parse(JSON.stringify(value));

              this.listaAvaliacoes = avaliacoes
              return
            }
          })
        }
      },
      error: (e) => console.error(e)
    });
  }
}
