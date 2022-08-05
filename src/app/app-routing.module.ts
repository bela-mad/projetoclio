import { CadastroComponent } from './area-deslogada/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './area-deslogada/login/login.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'cadastro', component: CadastroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
