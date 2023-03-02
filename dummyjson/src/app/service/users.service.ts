import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from '../models/userData.interface';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  user_url = 'https://dummyjson.com/auth/users';

  searchQuery = new Subject<string>();

  getAllUsers() {
    return this.http.get<any>(this.user_url);
  }

  searchUser(fname:string | null){
    return this.http.get<{users: userData[]}>(`${this.user_url}/search?q=${fname}`).pipe(map((res) => res.users))
  }


}
