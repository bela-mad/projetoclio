import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/area-deslogada/service/login.service';
import { Login } from 'src/app/area-deslogada/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    senha: '',
  };

  constructor(private service: LoginService) {
    this.login = new Login();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service
      .logarVisitante(this.login)
      .subscribe((response) => console.log(response));
  }
}
