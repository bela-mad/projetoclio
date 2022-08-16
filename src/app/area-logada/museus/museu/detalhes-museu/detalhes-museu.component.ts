import { CriaAvaliacaoDto } from './../../../../core/model/criaAvaliacaoDto';
import { NotaMediaMuseuDto } from './../../../../core/model/notaMediaMuseuDto';
import { MuseusDto } from 'src/app/core/model/museusDto';
import { Component, OnInit } from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MuseuService } from 'src/app/core/services/museu.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { AvaliacaoDto } from 'src/app/core/model/avaliacaoDto';
import { AvaliacaoService } from 'src/app/core/services/avaliacao.service';

@Component({
  selector: 'app-detalhes-museu',
  templateUrl: './detalhes-museu.component.html',
  styleUrls: ['./detalhes-museu.component.css'],
})
export class DetalhesMuseuComponent implements OnInit {
  id?: any
  museu: MuseusDto 
  notaMuseu:NotaMediaMuseuDto
  listaAvaliacoes: AvaliacaoDto[] = []
  avaliacao:CriaAvaliacaoDto
  imagemNota: any


  constructor(
    private route: ActivatedRoute,
    private museuService: MuseuService, 
    private tokenStorage: TokenStorageService,
    private avaliacaoService: AvaliacaoService
    ) 
    {
      this.museu = new MuseusDto
      this.notaMuseu = new NotaMediaMuseuDto
      this.avaliacao = new CriaAvaliacaoDto
      this.imagemNota = ''
    }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) => {
       this.id = params.get('id')
       this.getMuseu()   
       this.getMediaMuseu()
       this.obterTodasAvaliacoes()
    })
  }

  getMuseu(){
    this.museuService.findById(this.id, this.tokenStorage.getToken())
      .subscribe({
        next: (data) => {
          if(data){
            this.museu = data;
          }
        },
        error: (e) => console.error(e)
      });
  }

  getMediaMuseu(){
    this.museuService.getNotaMedia(this.id, this.tokenStorage.getToken())
      .subscribe({
        next: (data) => {
          if(data){
            this.notaMuseu = data;
            this.getImagemNota()
          }
        },
        error: (e) => console.error(e)
      });
  }

  getImagemNota(){
    var media = this.notaMuseu.notaMedia;
    if(media && media > 0){
      if(media >= 1 && media < 2){
        this.imagemNota = "assets/estrelas_avaliacao_1.png"
      }else if(media >= 2 && media < 3){
        this.imagemNota = "assets/estrelas_avaliacao_2.png"
      }else if(media >= 3 && media < 4){
        this.imagemNota = "assets/estrelas_avaliacao_3.png"
      }else if(media >= 4 && media < 5){
        this.imagemNota = "assets/estrelas_avaliacao_4.png"
      }else{
        this.imagemNota = "assets/estrelas_avaliacao_5.png"
      }
    }
  }

  obterTodasAvaliacoes(){
    this.avaliacaoService.findByMuseu(this.id, this.tokenStorage.getToken())
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

  createAvaliacao() {
    const data = {
      ...this.avaliacao,
      museu: {
        id:this.id
      }
    }

    this.avaliacaoService.createAvaliacao(data, this.tokenStorage.getToken())
      .subscribe({
        next: (res) => {
          alert('Avaliação Cadastrada com Sucesso')
         this.avaliacao = new CriaAvaliacaoDto
         this.obterTodasAvaliacoes()
        },
        error: (e) => console.error(e)
      })
  }

  perfilAdmnistrativo() : boolean{
    var emailUsuarioLogado: string = this.tokenStorage.getUserEmail()

    if(emailUsuarioLogado == "admin@email.com"){
      return true
    }else{
      return false
    }
  }
}
