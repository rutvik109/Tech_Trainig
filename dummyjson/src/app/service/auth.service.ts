import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login_url = 'https://dummyjson.com/auth/login';

  login(data: any) {
    return this.http.post<any>(this.login_url, data);
  }

  getToken() {
    return sessionStorage.getItem('token')
      ? sessionStorage.getItem('token')
      : null;
  }
}
