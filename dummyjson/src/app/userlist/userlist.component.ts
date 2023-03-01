import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  constructor(private usersService: UsersService) {}

  userList: any[] = [];

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.userList = data['users'];
      console.log(this.userList);
    });
  }
}
