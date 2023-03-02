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

  
  // userid: any;

  // getUser() {
  //   return this.authService.user.pipe(
  //     take(1),
  //     exhaustMap((user) => {
  //       this.userid = user?.id;
  //       return this.http.get<any>(this.single_url + this.userid);
  //     })
  //   );
  // }

  getUser(){
    return this.http.get<any>(this.single_url + this.authService.getId());
  }
}
