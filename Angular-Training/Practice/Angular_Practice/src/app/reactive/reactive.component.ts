import { Component } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { NameValidator } from '../shared/validator.name'
import { PasswordValidator } from '../shared/validator.password';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

constructor(private fb : FormBuilder){}

 get password() {
  return this.signUpForm.controls['password'];
 }

signUpForm = this.fb.group({
  email : ['',Validators.required],
  password: ['',[Validators.required,Validators.minLength(5),NameValidator]],
  cpassword: ['']
},{validator : PasswordValidator})

}
