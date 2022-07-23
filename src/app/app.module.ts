import { PerfilAdminComponent } from './area-logada/perfis/perfil-admin/perfil-admin.component';
import { AlterarMuseusComponent } from './area-logada/admin/alterar-museus/alterar-museus.component';
import { LoginComponent } from './area-deslogada/login/login.component';
import { CadastroComponent } from './area-deslogada/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlterarSenhaComponent } from './area-deslogada/alterar-senha/alterar-senha.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CadastroMuseusComponent } from './area-logada/admin/cadastro-museus/cadastro-museus.component';
import { ModeracaoAvaliacoesComponent } from './area-logada/admin/moderacao-avaliacoes/moderacao-avaliacoes.component';
import { PerfilVisitanteComponent } from './area-logada/perfis/perfil-visitante/perfil-visitante.component';
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
      PerfilVisitanteComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
