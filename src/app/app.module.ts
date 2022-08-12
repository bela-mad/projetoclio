import { HttpClientModule } from '@angular/common/http';
import { PerfilAdminComponent } from './area-logada/perfis/perfil-admin/perfil-admin.component';
import { AlterarMuseusComponent } from './area-logada/admin/alterar-museus/alterar-museus.component';
import { LoginComponent } from './area-deslogada/login/login.component';
import { CadastroComponent } from './area-deslogada/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlterarSenhaComponent } from './area-deslogada/alterar-senha/alterar-senha.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CadastroMuseusComponent } from './area-logada/admin/cadastro-museus/cadastro-museus.component';
import { ModeracaoAvaliacoesComponent } from './area-logada/admin/moderacao-avaliacoes/moderacao-avaliacoes.component';
import { PerfilVisitanteComponent } from './area-logada/perfis/perfil-visitante/perfil-visitante.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { MuseusComponent } from './area-logada/museus/museus.component';
import { RankingComponent } from './area-logada/ranking/ranking.component';
import { EmConstrucaoComponent } from './core/em-construcao/em-construcao.component';
import { SobreComponent } from './area-logada/sobre/sobre.component';
import { InicioComponent } from './area-logada/inicio/inicio.component';
import { DetalhesMuseuComponent } from './area-logada/museus/museu/detalhes-museu/detalhes-museu.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AlterarSenhaComponent,
    CadastroComponent,
    LoginComponent,
    AlterarMuseusComponent,
    CadastroMuseusComponent,
    ModeracaoAvaliacoesComponent,
    PerfilAdminComponent,
    PerfilVisitanteComponent,
    TermosCondicoesComponent,
    PoliticaPrivacidadeComponent,
    MuseusComponent,
    RankingComponent,
    EmConstrucaoComponent,
    SobreComponent,
    InicioComponent,
    DetalhesMuseuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatInputModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
