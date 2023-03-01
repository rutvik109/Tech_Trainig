import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authResponse } from '../models/auth-response.interface';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userData = new BehaviorSubject<User | null>(null);

  user:any;

  register_url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY6t6CgaKdeWUi1GsuEutBOcRVTfbDSLs';

  login_url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY6t6CgaKdeWUi1GsuEutBOcRVTfbDSLs';



  ngOnInit(){
   
      this.user = sessionStorage.getItem('user');
   
  }

  registerUser(email: any, password: any) {
    return this.http
      .post<authResponse>(this.register_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((data) => {
          this.authUser(data.email, data.localId, data.idToken);
        })
      );
  }

  loginUser(email: any, password: any) {
    return this.http
      .post<authResponse>(this.login_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((data) => {
          this.authUser(data.email, data.localId, data.idToken);
        })
      );
  }

  private authUser(email: string, userId: string, token: string) {
    const value = new User(email, userId, token);
    console.log('Value', value);
    this.userData.next(value);
    sessionStorage.setItem('user', JSON.stringify(value));
  }
}
