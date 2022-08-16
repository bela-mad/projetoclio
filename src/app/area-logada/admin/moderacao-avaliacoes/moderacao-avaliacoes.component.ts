import { AvaliacaoDto } from './../../../core/model/avaliacaoDto';
import { AvaliacaoService } from './../../../core/services/avaliacao.service';
import { MuseuService } from './../../../core/services/museu.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { MuseusDto } from 'src/app/core/model/museusDto';

@Component({
  selector: 'app-moderacao-avaliacoes',
  templateUrl: './moderacao-avaliacoes.component.html',
  styleUrls: ['./moderacao-avaliacoes.component.css']
})
export class ModeracaoAvaliacoesComponent implements OnInit {
  museuSelecionado: MuseusDto
  listaMuseus: MuseusDto[] = []
  listaAvaliacoes: AvaliacaoDto[] = []
  listaDenunciadas: AvaliacaoDto[] = []

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
    this.listarTodasAvaliacoes()
    this.listarTodasDenunciadas()
  }

  listarTodasAvaliacoes(){
    this.avaliacaoService.getTodasAvaliacoes(this.tokenStorage.getToken())
      .subscribe({
        next: (data) => {
          this.listaAvaliacoes = data._embedded.avaliacaoDtoList
        },
        error: (e) => console.error(e)
      });
  }

  listarTodosMuseus(){
    this.museuService.findAll(this.tokenStorage.getToken())
    .subscribe({
      next: (data) => {
        this.listaMuseus = data._embedded.museusDtoList
      },
      error: (e) => console.error(e)
    });
  }

  listarTodasDenunciadas(){
    this.avaliacaoService.getDenunciadas(this.tokenStorage.getToken())
    .subscribe({
      next: (data) => {
        if(data._embedded){
          this.listaDenunciadas = data._embedded.avaliacaoDtoList;
        }else{
          this.listaDenunciadas = []
        }
      },
      error: (e) => console.error(e)
    });
  }
  

  buscarInformacoesMuseuSelecionado(museuSel: MuseusDto){
    if(museuSel == null || museuSel.id == null || museuSel.id == 0){
      return;
    }

    this.avaliacaoService.findByMuseu(museuSel.id, this.tokenStorage.getToken())
    .subscribe({
      next: (data) => {
        if(data._embedded){
          this.listaAvaliacoes = data._embedded.avaliacaoDtoList;
        }else{
          this.listaAvaliacoes = []
        }
      },
      error: (e) => console.error(e)
    });
  }
}
