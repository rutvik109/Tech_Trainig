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
  ) {
    sessionStorage.clear();
  }
  errMsg: any;
  authForm: any;

  ngOnInit() {
    this.authForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  OnSubmit() {
    this.authService.login(this.authForm.value).subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('id', JSON.stringify(data.id));
        this.authForm.reset({});
        this.router.navigate(['/userlist']);
      },
      (error) => {
        this.errMsg = error.error.message;
      }
    );
  }
}
