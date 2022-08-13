import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MuseusApiService } from 'src/app/area-logada/museus/services/museus-api.service';

@Component({
  selector: 'app-museus',
  templateUrl: './museus.component.html',
  styleUrls: ['./museus.component.css']
})
export class MuseusComponent implements OnInit {

  constructor(private museuSvc: MuseusApiService) { }

  allMuseus : Observable<any> | undefined;

  ngOnInit(): void {
    this.getMuseus();
  }

  getMuseus() {
    this.allMuseus = this.museuSvc.getAllMuseus();
  }

  getMuseu(museuBuscado: string | undefined) {
    if (museuBuscado === "" || museuBuscado === undefined) {
      return this.getMuseus();
    } else {
      this.allMuseus = this.museuSvc.getAllMuseusPorNome(museuBuscado);
    }
  }
}

