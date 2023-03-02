import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

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
  ) {}

  errMsg: string = '';

  loginMode: boolean = true;

  authForm: any;

  switchLoginMode() {
    this.loginMode = !this.loginMode;
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  OnSubmit() {
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    if (this.loginMode) {
      this.authService.loginUser(email, password).subscribe(
        (data) => {
          this.authForm.reset({});
          this.router.navigate(['user']);
        },
        (error) => {
          this.errMsg = error.error.error.message;
        }
      );
    } else {
      this.authService.registerUser(email, password).subscribe(
        (data) => {
          this.authForm.reset({});
          this.loginMode = !this.loginMode;
        },
        (error) => {
          this.errMsg = error.error.error.message;
        }
      );
    }
  }
}
