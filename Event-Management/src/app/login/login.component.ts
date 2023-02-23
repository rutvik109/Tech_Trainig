import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private fb : FormBuilder, private authService : AuthService){}

loginUser = this.fb.group({
  email : [''],
  password : ['']
})

OnSubmit(){
  this.authService.loginUser(this.loginUser.value).subscribe(
    data => console.log(data),
    err =>  console.log(err)
  )

}


}
