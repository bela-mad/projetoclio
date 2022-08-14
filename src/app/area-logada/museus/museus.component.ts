import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MuseusApiService } from './services/museus-api.service';

@Component({
  selector: 'app-museus',
  templateUrl: './museus.component.html',
  styleUrls: ['./museus.component.css'],
})
export class MuseusComponent implements OnInit {
  constructor(private museuSvc: MuseusApiService) {}

  allMuseus!: Observable<any>;

  ngOnInit(): void {
    this.getMuseus();
  }

  getMuseus() {
    this.allMuseus = this.museuSvc.getAllMuseus();
  }

  getMuseu(museuBuscado: string) {
    if (museuBuscado === '' || museuBuscado === undefined) {
      return this.getMuseus();
    } else {
      this.allMuseus = this.museuSvc.getAllMuseusPorNome(museuBuscado);
    }
  }
}
