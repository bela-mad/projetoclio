import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY_EMAIL = 'auth-user-email'
const USER_KEY_ID = 'auth-user-id'
const VISITANTE_KEY_NOME = 'visitante-nome'
const VISITANTE_KEY_ID = 'visitante-id'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear()
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY)
  }

  public saveUser(email: string, id: string): void {
    window.sessionStorage.removeItem(USER_KEY_EMAIL)
    window.sessionStorage.removeItem(USER_KEY_ID)
    window.sessionStorage.setItem(USER_KEY_EMAIL, email)
    window.sessionStorage.setItem(USER_KEY_ID, id)
  }

  public saveVisitante(id: string, nome: string): void{
    window.sessionStorage.removeItem(VISITANTE_KEY_NOME)
    window.sessionStorage.removeItem(VISITANTE_KEY_ID)
    window.sessionStorage.setItem(VISITANTE_KEY_NOME, nome)
    window.sessionStorage.setItem(VISITANTE_KEY_ID, id)
  }

  public getUserEmail(): any {
    return sessionStorage.getItem(USER_KEY_EMAIL)
  }

  public getUserId(): any {
    return sessionStorage.getItem(USER_KEY_ID)
  }

  public getVisitanteNome(): any {
    return sessionStorage.getItem(VISITANTE_KEY_NOME)
  }

  public getVisitanteId(): any {
    return sessionStorage.getItem(VISITANTE_KEY_ID)
  }
}