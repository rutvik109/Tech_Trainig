import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response.interface';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  authForm: any;

  errMsg : any;

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
    let AuthObservable: Observable<AuthResponse>;

    if (this.loginMode) {
      const email = this.authForm.value.email;
      const password = this.authForm.value.password;
      AuthObservable = this.authService.OnSignin(email, password);
    } else {
      const email = this.authForm.value.email;
      const password = this.authForm.value.password;
      AuthObservable = this.authService.OnSingup(email, password);
    }

    AuthObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        this.errMsg = error.error.error.message;
      }
    );
  }
}
