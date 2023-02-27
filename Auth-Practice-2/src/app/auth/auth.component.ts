import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }
  loginMode = true;

  authForm: any;

  errMsg: any;

  ngOnInit() {
    this.authForm = this.fb.group({
      email: [''],
      password: [''],
      username: [''],
      role: ['user'],
    });
  }

  switchLoginMode() {
    this.loginMode = !this.loginMode;
  }

  OnSubmit() {
    if (this.loginMode) {
      this.authService.getAllUser().subscribe(
        (data) => {
          let user = data.find((u: any) => {
            return (
              u.email === this.authForm.value.email &&
              u.password === this.authForm.value.password
            );
          });

          if (user) {
            sessionStorage.setItem('user', user.username);
            sessionStorage.setItem('role', user.role);
            this.router.navigate(['users']);
          } else {
            this.errMsg = 'Invalid Credintials';
          }
        },
        (error) => {
          this.errMsg = error.message;
        }
      );
    } else {
      this.authService.registerUser(this.authForm.value).subscribe(
        (data) => {
          console.log(data);
          sessionStorage.setItem('user', this.authForm.value.username);
          sessionStorage.setItem('role', this.authForm.value.role);
          this.authForm.reset({});
          this.errMsg = "User Added Successfully!"
          this.loginMode = !this.loginMode;
        },
        (error) => {
          this.errMsg = error.message;
        }
      );
    }
  }
}
