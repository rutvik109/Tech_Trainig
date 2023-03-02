import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isNavigate = false;

  ngDoCheck() {
    if (this.router.url == '/auth') {
      this.isNavigate = false;
    } else {
      this.isNavigate = true;
    }
  }
}
