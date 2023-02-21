import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  alert = false;

  constructor(private restoService: RestroService) {}

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
  });

  signUp() {
    this.restoService.postUser(this.signUpForm.value).subscribe((data) => {
      this.alert = true;
      this.signUpForm.reset({});
    });
    console.log(this.signUpForm);
  }
}
