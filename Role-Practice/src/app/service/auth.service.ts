import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  _url = 'http://localhost:3000/users';



  OnSignin(email: any, password: any) {
    return this.http.post<AuthResponse>(this._url, {
      email: email,
      password: password,
      role:"user"
    });
  }

  getAllUser(){
    return this.http.get<any>(this._url);
  }

  isLoggedIn(){
    return sessionStorage.getItem("role") != null;
  }

  getRole(){
    return sessionStorage.getItem("role")?sessionStorage.getItem("role")?.toString():"";
  }

  getUserById(id:any){
      return this.http.get(this._url+'/'+id);
  }

  updateUser(id:any,data:any){
    return this.http.put<any>(this._url+"/"+id,data);
  }

  deleteById(id:any){
    return this.http.delete<any>(this._url+'/'+id);
  }

  getEmail(){
    return sessionStorage.getItem("email")?sessionStorage.getItem("email")?.toString():"";
  }
}
