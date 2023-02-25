import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../model/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  singup_url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY6t6CgaKdeWUi1GsuEutBOcRVTfbDSLs';

  singin_url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY6t6CgaKdeWUi1GsuEutBOcRVTfbDSLs';

  OnSingup(email: any, password: any) {
    return this.http.post<AuthResponse>(this.singup_url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  OnSignin(email:any, password:any) {
    return this.http.post<AuthResponse>(this.singin_url,{
      email:email,
      password:password,
      returnSecureToken:true
    });
  }
}
