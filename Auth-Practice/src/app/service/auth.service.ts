import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../model/auth-response.interface';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user = new BehaviorSubject<User|null>(null);

  singup_url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY6t6CgaKdeWUi1GsuEutBOcRVTfbDSLs';

  singin_url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY6t6CgaKdeWUi1GsuEutBOcRVTfbDSLs';

  OnSingup(email: any, password: any) {
    return this.http
      .post<AuthResponse>(this.singup_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          this.AuthenticatedUser(res.email, res.localId, res.idToken);
          localStorage.setItem('token', res.idToken);
        })
      );
  }

  OnSignin(email: any, password: any) {
    return this.http
      .post<AuthResponse>(this.singin_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          this.AuthenticatedUser(res.email, res.localId, res.idToken);
          localStorage.setItem('token', res.idToken);
        })
      );
  }

  AuthenticatedUser(email: any, id: any, token: any) {
    const userData = new User(email, id, token);
    console.log('user => ', userData);
    this.user.next(userData);
  }

  getToken(){
    return localStorage.getItem('token') ? localStorage.getItem('token') : " ";
  }
}
