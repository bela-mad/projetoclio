import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token.storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const baseUrl = environment.apiUrl + '/visitante';
@Injectable({
  providedIn: 'root'
})
export class VisitanteService {
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
    });
    return this.http.post(baseUrl, data, {headers: reqHeader});
  }

  alterarSenha(id: any, data:any, token:any): Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put(baseUrl + "/alterar-senha/" + id, data, {headers: reqHeader});
  }
  
  obterVisitantePorUsuarioLogado(token:any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(baseUrl + "/userid", {headers: reqHeader});
  }
}


