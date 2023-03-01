import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  user_url = 'https://dummyjson.com/auth/users';

  getAllUsers() {
    return this.http.get<any>(this.user_url);
  }
}
