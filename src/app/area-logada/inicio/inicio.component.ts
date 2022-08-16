import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private tokenService: TokenStorageService, private route: Router) { }

  ngOnInit() {
    if(!this.tokenService.getToken() || this.tokenService.getToken() === ''){
      this.route.navigate([''])
    }
  }

}
