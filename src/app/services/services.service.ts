import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 // Crear una instancia de http
constructor(private http: HttpClient) { }

 // Definir la url de la api (la base de la url de la api esta en environment.ts)
apiUser = environment.Api_url+'registerUser?';

 // metodo post
postUser(usuario: User): Observable<User>{
  return this.http.post<User>(this.apiUser, usuario);
}
}
