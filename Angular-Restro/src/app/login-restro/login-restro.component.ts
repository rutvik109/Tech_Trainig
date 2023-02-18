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
   const user = data.find((u : any) => {
    return u.email == this.loginResto.value.email && u.password == this.loginResto.value.password;
   })

   if(user){
    this.loginResto.reset({});
    this.router.navigate(['']);
   }
   else{
    alert("user not found");
   }
  });

}


}
