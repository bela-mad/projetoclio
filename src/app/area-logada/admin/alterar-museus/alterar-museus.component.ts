import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { MuseusDto } from 'src/app/core/model/museusDto';
import { MuseuService } from 'src/app/core/services/museu.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';

@Component({
  selector: 'app-alterar-museus',
  templateUrl: './alterar-museus.component.html',
  styleUrls: ['./alterar-museus.component.css']
})
export class AlterarMuseusComponent implements OnInit {
  id?: any
  museu: MuseusDto
  constructor(
    private route: ActivatedRoute,
    private museuService: MuseuService, 
    private tokenStorage: TokenStorageService
    ) 
    {
      this.museu = new MuseusDto
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
    })
  }


  atualizarMuseus() {
    const data = {
      ...this.museu,
   }
   this.museuService.atualizarMuseus(this.id,data, this.tokenStorage.getToken())
   .subscribe({
     next: (res) => {
       alert('Museu Alterado com Sucesso')
      },
     error: (e) => console.error(e)
   })
  } 
}
