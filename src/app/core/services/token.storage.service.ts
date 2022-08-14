import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY_EMAIL = 'auth-user-email'
const USER_KEY_ID = 'auth-user-id'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(email: string, id: string): void {
    window.sessionStorage.removeItem(USER_KEY_EMAIL);
    window.sessionStorage.setItem(USER_KEY_EMAIL, email);
    window.sessionStorage.setItem(USER_KEY_ID, id);
  }

  public getUserEmail(): any {
    return sessionStorage.getItem(USER_KEY_EMAIL);
  }

  public getUserId(): any {
    return sessionStorage.getItem(USER_KEY_ID);
  }

}