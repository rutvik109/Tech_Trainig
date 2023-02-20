import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestroService {

  
  constructor(private http : HttpClient) { }
  
  url = "http://localhost:3000/restaurants";

  uurl = "http://localhost:3000/users";
  
  getList(){
    return this.http.get<any>(this.url);
  }

  postList(data : any){
    return this.http.post<any>(this.url,data);
  }

  postUser(data : any){
    return this.http.post<any>(this.uurl,data);
  }

  getUser(){
    return this.http.get<any>(this.uurl);
  }

  deleteRestro(id : any){
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  getIdRestro(id : any){
    return this.http.get<any>(`${this.url}/${id}`)
  }

  putRestro(id:any,data:any){
   return this.http.put<any>(`${this.url}/${id}`,data)
  }
}
