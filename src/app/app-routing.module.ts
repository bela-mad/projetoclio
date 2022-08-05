import { PerfilVisitanteComponent } from './area-logada/perfis/perfil-visitante/perfil-visitante.component';
import { PerfilAdminComponent } from './area-logada/perfis/perfil-admin/perfil-admin.component';
import { AlterarSenhaComponent } from './area-deslogada/alterar-senha/alterar-senha.component';
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
  { path: 'cadastro', component: CadastroComponent },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'perfil-admin', component: PerfilAdminComponent },
  { path: 'perfil-visitante', component: PerfilVisitanteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
