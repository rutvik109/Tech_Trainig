import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  alert = false;

  constructor(private restoService: RestroService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
  });

  login() {
    this.restoService.postUser(this.loginForm.value).subscribe((data) => {
      this.alert = true;
      this.loginForm.reset({});
    });
  }
}
