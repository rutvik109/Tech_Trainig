import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-restro',
  templateUrl: './login-restro.component.html',
  styleUrls: ['./login-restro.component.css']
})
export class LoginRestroComponent {

constructor(private fb : FormBuilder, private restoService : RestoService, private router : Router ){}

loginResto = this.fb.group({
  email: [''],
  password: ['']
  })

OnLogin(){
  this.restoService.loginUser().subscribe((data) => {
   console.log(data);
  });
}


}
