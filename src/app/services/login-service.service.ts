import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
   rootUrl = "http://localhost:8082"
  constructor(private http: HttpClient) { }

  login(login: any): any{
   return this.http.post<any>(this.rootUrl+"/itsol/auth/signin",login);
  }
}
