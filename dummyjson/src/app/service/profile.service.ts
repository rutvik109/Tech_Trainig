import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  single_url = 'https://dummyjson.com/auth/users/';

  getUser() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<any>(this.single_url + user?.id);
      })
    );
  }
}
