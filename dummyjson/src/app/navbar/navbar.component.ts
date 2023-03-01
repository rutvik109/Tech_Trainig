import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isNavbar = false;

  ngDoCheck(){
    if(this.router.url == "/auth"){
      this.isNavbar = false;
    }
    else{
       this.isNavbar = true;
    }
  }
}