import { CriaAvaliacaoDto } from './../../../../core/model/criaAvaliacaoDto';
import { NotaMediaMuseuDto } from './../../../../core/model/notaMediaMuseuDto';
import { MuseusDto } from 'src/app/core/model/museusDto';
import { Component, OnInit } from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MuseusApiService } from '../../services/museus-api.service';
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
    }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) => {
       this.id = params.get('id')
       this.museuService.findById(this.id, this.tokenStorage.getToken())
       .subscribe({
         next: (data) => {
           if(data){
             this.museu = data;
           }
         },
         error: (e) => console.error(e)
       });
       this.museuService.getNotaMedia(this.id, this.tokenStorage.getToken())
       .subscribe({
         next: (data) => {
           if(data){
             this.notaMuseu = data;
           }
         },
         error: (e) => console.error(e)
       });
       this.obterTodasAvaliacoes()
      })

      
    }

    obterTodasAvaliacoes(){
      this.avaliacaoService.findByMuseu(this.id, this.tokenStorage.getToken())
     .subscribe({
       next: (data) => {
         if(data._embedded){
           console.log(data._embedded.museusDtoList)
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
          console.log(res);
          alert('Avaliação Cadastrada com Sucesso')
         this.avaliacao = new CriaAvaliacaoDto
         this.obterTodasAvaliacoes()
        },
        error: (e) => console.error(e)
      })
  }
   
}
