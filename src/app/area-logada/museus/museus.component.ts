import { MuseuService } from 'src/app/core/services/museu.service';
import { MuseusDto } from 'src/app/core/model/museusDto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MuseusApiService } from './services/museus-api.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';

@Component({
  selector: 'app-museus',
  templateUrl: './museus.component.html',
  styleUrls: ['./museus.component.css'],
})
export class MuseusComponent implements OnInit {
  constructor(private museuSvc: MuseuService, private tokenStorage: TokenStorageService) {}

  allMuseus: MuseusDto[] = [];

  ngOnInit(): void {
    this.getMuseus();
  }

  getMuseus() {
    this.museuSvc.findAll(this.tokenStorage.getToken())
    .subscribe({
      next: (data) => {
        this.allMuseus = data._embedded.museusDtoList
      },
      error: (e) => console.error(e)
    });
  }

  getMuseu(museuBuscado: string) {
    if (museuBuscado === '' || museuBuscado === undefined) {
      this.getMuseus()
    } else {
      this.allMuseus = this.allMuseus.filter((m: MuseusDto) => 
        m.nome.includes(museuBuscado)
      )
    }
  }
}
