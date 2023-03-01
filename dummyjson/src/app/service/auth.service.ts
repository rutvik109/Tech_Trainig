import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response.interface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user = new BehaviorSubject<User | null>(null);

  login_url = 'https://dummyjson.com/auth/login';

  login(data: any) {
    return this.http.post<AuthResponse>(this.login_url, data).pipe(
      tap((data) => {
        this.authUser(
          data.id,
          data.username,
          data.email,
          data.firstName,
          data.lastName,
          data.gender,
          data.image,
          data.token
        );
      })
    );
  }

  getToken() {
    return sessionStorage.getItem('token')
      ? sessionStorage.getItem('token')
      : null;
  }

  authUser(
    id: any,
    username: any,
    email: any,
    firstName: any,
    lastName: any,
    gender: any,
    image: any,
    token: any
  ) {
    const value = new User(
      id,
      username,
      email,
      firstName,
      lastName,
      gender,
      image,
      token
    );
    console.log('value', value);
    this.user.next(value);
  }
}
