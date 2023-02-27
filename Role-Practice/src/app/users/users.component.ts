import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private authService: AuthService, private router: Router) {}
  userList: any;

  isadmin = false;

  role:any;

  ngDoCheck() {
    this.role = this.authService.getRole();
    if(this.role == "admin"){
      this.isadmin = true;
    }
    else{
      this.isadmin = false;
    }
  }

  user: any = [];

  ngOnInit() {
    this.authService.getAllUser().subscribe((data) => {
      this.userList = data;
    });
  }

  Update(id: any) {
    this.router.navigate([`users/${id}`]);
  }

  Delete(id: any) {
    this.authService.deleteById(id).subscribe((data) => {
      console.log(data);
      this.userList.splice(id - 1, 1);
    });
  }
}
