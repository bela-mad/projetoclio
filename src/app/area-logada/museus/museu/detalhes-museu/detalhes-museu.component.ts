import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MuseusApiService } from '../../services/museus-api.service';

@Component({
  selector: 'app-detalhes-museu',
  templateUrl: './detalhes-museu.component.html',
  styleUrls: ['./detalhes-museu.component.css'],
})
export class DetalhesMuseuComponent implements OnInit {
  museu: any = {};

  constructor(private router: Router) {
    // if (this.router.getCurrentNavigation().extras?.state != null) {
    //   this.museu = this.router.getCurrentNavigation().extras.state;
    // }
  }

  ngOnInit(): void {}
}
