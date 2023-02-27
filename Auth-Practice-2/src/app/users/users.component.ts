import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private authService: AuthService, private router: Router) {}

  userList: any[] = [];
  isAdmin = false;

  ngOnInit() {
    this.authService.getAllUser().subscribe((data) => {
      this.userList = data;
    });
  }

  ngDoCheck() {
    if (this.authService.isAdmin()) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  navigate(id: any) {
    this.router.navigate([`users/${id}`]);
  }

  Delete(id: any) {
    this.authService.deleteById(id).subscribe((data) => {
      this.userList.splice(id - 1, 1);
    });
  }
}
