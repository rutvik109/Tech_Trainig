import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  email: any;
  constructor(private router: Router, private authSerive: AuthService) {}

  navbar = false;

  isadmin = false;

  role: any = 'user';

  ngDoCheck() {
    if (this.router.url == '/auth') {
      this.navbar = false;
    } else {
      this.navbar = true;
    }

    this.role = this.authSerive.getRole();
    if (this.role == 'admin') {
      this.isadmin = true;
    }

    this.email = this.authSerive.getEmail();
  }
}
