import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
   
 _registerUrl = "http://localhost:3000/api/register";

 _loginUrl = "http://localhost:3000/api/login";

  registerUser(data : any){
      return this.http.post<any>(this._registerUrl,data);
  }

  loginUser(data : any){
    return this.http.post<any>(this._loginUrl,data);
}

  isLogged(){
    return localStorage.getItem("token");
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
