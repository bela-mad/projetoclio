import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const baseUrl = environment.apiUrl + '/museus';

@Injectable({
  providedIn: 'root'
})
export class MuseuService {

  constructor(private http: HttpClient) { }

  create(data: any, token: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
     });
    return this.http.post(baseUrl, data, {headers: reqHeader});
  }

  findAll(token:any):Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(baseUrl, {headers: reqHeader});
  }

  findById(id:any, token:any):Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(baseUrl + "/" + id, {headers: reqHeader});
  }

  atualizarMuseus(id:any, data:any, token:any):Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put(baseUrl + "/" + id, data, {headers: reqHeader});
  }

  getNotaMedia(id:any,token:any):Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(baseUrl + "/notaMedia/" +  id,  {headers: reqHeader});
  }
  

  
}