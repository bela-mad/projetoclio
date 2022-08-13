import { Router } from '@angular/router';
import { LoginForm } from './../../core/model/loginForm';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/area-deslogada/service/login.service';
import { TokenStorageService } from 'src/app/core/services/token.storage.service';
//import { Login } from 'src/app/area-deslogada/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: LoginForm = {
    email: '',
    senha: '',
  };

  constructor(private service: LoginService, private router: Router, private tokenStorage: TokenStorageService) {
    this.login = new LoginForm();
  }

  ngOnInit(): void {
    this.tokenStorage.signOut()
  }

  onSubmit() {
    this.service.logar(this.login.email, this.login.senha).then(
      (value: boolean) => {
        if(value === true){
          this.router.navigate(['inicio'])
        }else{
          alert('Email ou senha incorretos!')
        }
      }
    ).catch(
      (error: any) => {
        console.error(error)
        alert('Email ou senha incorretos!')
      }
    )
  }
}
