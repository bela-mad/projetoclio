import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './area-deslogada/login/login.component';
import { CadastroMuseusComponent } from './area-logada/admin/cadastro-museus/cadastro-museus.component';
import { ModeracaoAvaliacoesComponent } from './area-logada/admin/moderacao-avaliacoes/moderacao-avaliacoes.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'cadastro-museus', component: CadastroMuseusComponent },
  { path: 'moderacao-avaliacoes', component: ModeracaoAvaliacoesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
