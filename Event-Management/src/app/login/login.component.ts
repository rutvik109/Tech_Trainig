import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router : Router) {}

  loginUser = this.fb.group({
    email: [''],
    password: [''],
  });

  OnSubmit() {
    this.authService.loginUser(this.loginUser.value).subscribe(
      (data) => {
        localStorage.setItem("token",data.token);
        this.router.navigate(['/special']);
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
}
