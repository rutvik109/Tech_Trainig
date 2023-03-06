import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UsersService
  ) {}
  isNavbar = false;
  navid: string | null = null;
  isAdmin = false;
  fname: string | null = null;

  searchForm: any;

  searchQuery: string = '';

  ngOnInit() {
    this.searchForm = this.fb.group({
      fname: [''],
    });
  }

  ngDoCheck() {
    if (this.router.url == '/auth') {
      this.isNavbar = false;
    } else {
      this.isNavbar = true;
    }
    this.navid = this.authService.getId();
    if (this.navid == '1' || this.navid == '2') {
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

  OnSearch() {
    this.userService
      .searchUser(this.searchForm.value.fname)
      .subscribe((data) => {
        this.userService.searchQuery.next(data);
      });
    this.router.navigate(['search']);
  }

  onClose() {
    this.router.navigate(['userlist']);
    this.userService.searchQuery.next([]);
  }
}
