import { Component } from '@angular/core';
import { userData } from '../models/userData.interface';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  constructor(private usersService: UsersService) {}

  userList = [];

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.userList = data['users'];
      console.log("User List ",this.userList);
    });
  }

  tap(data: userData) {
    console.log(data);
  }
}
