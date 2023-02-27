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

  authForm: any;

  errMsg: any;

  ngOnInit() {
    this.authForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  loginMode: boolean = true;

  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  OnSubmit() {
    if (!this.loginMode) {
      const email = this.authForm.value.email;
      const password = this.authForm.value.password;
      this.authService.OnSignin(email, password).subscribe(
        (data) => {
          console.log(data);
          sessionStorage.setItem('role', data.role);
          this.authForm.reset({});
          this.loginMode = !this.loginMode;
        },
        (error) => {
          console.log(error);
          this.errMsg = error.message;
        }
      );
    } else {
      const email = this.authForm.value.email;
      const password = this.authForm.value.password;
      let role: any;
      this.authService.getAllUser().subscribe(
        (data) => {
          console.log(data);
          const user = data.find((u: any) => {
            return u.email === email && u.password === password;
          });
          if (user) {
            sessionStorage.setItem('role', user.role);
            sessionStorage.setItem('email',user.email);
            this.authForm.reset({});
            this.router.navigate(['emplist']);
          } else {
            this.errMsg = "User Doesn't Exist";
          }
        },
        (error) => {
          console.log(error);
          this.errMsg = error.message;
        }
      );
    }
  }
}
