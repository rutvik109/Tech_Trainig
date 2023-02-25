import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event_url = "http://localhost:3000/api/events";

  speacil_url = "http://localhost:3000/api/special";


  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this.event_url);
  }

  getSpecial(){
    return this.http.get<any>(this.speacil_url);
  }

}
