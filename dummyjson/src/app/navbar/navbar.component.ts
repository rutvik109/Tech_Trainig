import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) {
    
  }
  isNavbar = false;
  navid: any;
  isAdmin = false;
  fname: string | null = null;

  ngDoCheck() {
    if (this.router.url == '/auth') {
      this.isNavbar = false;
    } else {
      this.isNavbar = true;
    }
    this.navid = this.authService.getId();
    if (this.navid == '1') {
      this.isAdmin = true;  
    } else {
      this.isAdmin = false;
    }

    if (this.authService.getFname()) {
      this.fname = this.authService.getFname();
    } else {
      this.fname = null;
    }
  }
}
