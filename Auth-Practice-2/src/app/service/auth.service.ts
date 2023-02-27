import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  _url = 'http://localhost:3000/users';

  registerUser(data: any) {
    return this.http.post<any>(this._url, data);
  }

  getAllUser() {
    return this.http.get<any>(this._url);
  }

  isLoggedIn() {
    return sessionStorage.getItem('user') != null;
  }

  isAdmin() {
    return sessionStorage.getItem('role') == 'admin';
  }

  getById(id: any) {
    return this.http.get<any>(this._url + '/' + id);
  }

  updateById(id: any, data: any) {
    return this.http.patch<any>(this._url + '/' + id, data);
  }

  deleteById(id: any) {
    return this.http.delete<any>(this._url + '/' + id);
  }
}
