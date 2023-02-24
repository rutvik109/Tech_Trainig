import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { };

  api_url = "http://localhost:3000/user";


  GetAll(){
      return this.http.get<any>(this.api_url);
  }

  GetByCode(code : any){
    return this.http.get<any>(this.api_url+"/"+code);
  }

  ProceedRegister(inputdata : any){
    return this.http.post<any>(this.api_url,inputdata);
  }

  UpdateUser(code:any,inputdata : any){
      return this.http.put<any>(this.api_url+"/"+code,inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem("username") != null;
  }

  GetUserrole(){
    return sessionStorage.getItem("userrole")?sessionStorage.getItem("userrole")?.toString():'';
  }
}
