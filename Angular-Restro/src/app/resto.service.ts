import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  user_url = "http://localhost:3000/users"

  _url = "http://localhost:3000/restaurants";

 _durl = "";

 _uurl = "";

 _purl = "";

  constructor(private http : HttpClient) { }

  GetList(){
    // console.log("Data listed");
    // return "Data received";
   return this.http.get<any>(this._url)
  }

  AddRestro(data : any){
    return this.http.post<any>(this._url,data);
  }

  DeleteRestro(id : any){
    this._durl = `${this._url}/${id}`;
    return this.http.delete<any>(this._durl);
  }

  fetchRestro(id : any){
    this._uurl = `${this._url}/${id}`
      return this.http.get<any>(this._uurl)
  }

  putRestro(id :  any,data : any){
    this._purl = `${this._url}/${id}`
      return this.http.put<any>(this._purl,data);
  }

  postUser(data : any){
      return this.http.post<any>(this.user_url,data)
  }
}
