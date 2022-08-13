import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token.storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  perfilAdmnistrativo() : boolean{
    var emailUsuarioLogado: string = this.tokenStorage.getUser()

    if(emailUsuarioLogado == "admin@email.com"){
      return true
    }else{
      return false
    }
  }

}
