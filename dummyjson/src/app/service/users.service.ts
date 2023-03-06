import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from '../models/userData.interface';
import { BehaviorSubject, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  user_url = 'https://dummyjson.com/auth/users';

  searchQuery = new BehaviorSubject<userData[]>([]);

  getAllUsers() {
    return this.http.get<any>(this.user_url);
  }

  searchUser(fomeValue: string) {
    return this.http
      .get<{ users: userData[] }>(`${this.user_url}/search?q=${fomeValue}`)
      .pipe(
        map((res) => {
          return res.users;
        })
      );
  }
}
