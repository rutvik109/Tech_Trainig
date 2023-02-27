import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isNavbar = false;

  user : any;



  ngDoCheck() {
    let url = this.router.url;
    if (url == '/auth') {
      this.isNavbar = false;
    } else {
      this.isNavbar = true;
    }

    if(this.authService.isLoggedIn()){
      this.user = sessionStorage.getItem('user');
    }
    else{
      this.user = null;
    }
  }
}
