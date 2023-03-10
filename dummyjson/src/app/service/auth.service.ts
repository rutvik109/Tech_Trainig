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

  getId() {
    return sessionStorage.getItem('id')
      ? sessionStorage.getItem('id')
      : null;
  }

  getFname(){
    return sessionStorage.getItem('fname')
    ? sessionStorage.getItem('fname')
    : null;
  }

  authUser(
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string
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
