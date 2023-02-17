import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { RestoService } from "../resto.service"

@Component({
  selector: 'app-register-restro',
  templateUrl: './register-restro.component.html',
  styleUrls: ['./register-restro.component.css']
})
export class RegisterRestroComponent {


constructor(private fb : FormBuilder, private restoService : RestoService){};

regRestro =  this.fb.group({
  name: [''],
  email : [''],
  password: [''],
  confirm_password: ['']
})

alert = false;

OnRegister(){
  this.alert = true;
   this.restoService.postUser(this.regRestro.value).subscribe(data => console.log(data));
   this.regRestro.reset({});
}

closeAlert(){
  this.alert = false;
}

}
