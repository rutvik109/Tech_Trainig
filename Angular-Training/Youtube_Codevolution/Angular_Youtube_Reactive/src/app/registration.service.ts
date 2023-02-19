import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

  public url = "http://localhost:3000/enroll";

  register(UserDate : any){
    return this.http.post<any>(this.url,UserDate);
  }

}
