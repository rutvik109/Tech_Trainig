import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  _url = 'https://auth-angular-7d718-default-rtdb.firebaseio.com';

  postUser(data: any) {
    return this.authService.userData.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.put(`${this._url}/users/${user?.id}.json`, data);
      })
    );
  }

  getUser() {
    return this.http.get(`${this._url}/users.json`);
  }
}
