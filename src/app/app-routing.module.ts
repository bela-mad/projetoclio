import { AlterarMuseusComponent } from './area-logada/admin/alterar-museus/alterar-museus.component';
import { PerfilVisitanteComponent } from './area-logada/perfis/perfil-visitante/perfil-visitante.component';
import { PerfilAdminComponent } from './area-logada/perfis/perfil-admin/perfil-admin.component';
import { AlterarSenhaComponent } from './area-deslogada/alterar-senha/alterar-senha.component';
import { CadastroComponent } from './area-deslogada/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './area-deslogada/login/login.component';
import { CadastroMuseusComponent } from './area-logada/admin/cadastro-museus/cadastro-museus.component';
import { ModeracaoAvaliacoesComponent } from './area-logada/admin/moderacao-avaliacoes/moderacao-avaliacoes.component';
import { MuseusComponent } from './area-logada/museus/museus.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';
import { InicioComponent } from './area-logada/inicio/inicio.component';
import { SobreComponent } from './area-logada/sobre/sobre.component';
import { RankingComponent } from './area-logada/ranking/ranking.component';
import { EmConstrucaoComponent } from './core/em-construcao/em-construcao.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'perfil-admin', component: PerfilAdminComponent },
  { path: 'perfil-visitante', component: PerfilVisitanteComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'alterar-museus', component: AlterarMuseusComponent },

  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'cadastro-museus', component: CadastroMuseusComponent },
  { path: 'moderacao-avaliacoes', component: ModeracaoAvaliacoesComponent },
  { path: 'museus', component: MuseusComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'em-construcao', component: EmConstrucaoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
