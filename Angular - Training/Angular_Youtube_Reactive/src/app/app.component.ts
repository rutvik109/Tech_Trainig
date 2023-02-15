import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder , Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb : FormBuilder){};

  get UserName(){
    return this.registrationForm.controls.['userName'];
  }

   registrationForm = this.fb.group({
      userName: ["", [Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
      password: [""],
      confirmPassword: [""],
      address: this.fb.group({
        city: [""],
        state: [""],
        postCode: [""]
      })
   },{validator : PasswordValidator})

//     registrationForm = new FormGroup(
//       {
//         userName: new FormControl(""),
//         password: new FormControl(""),
//         confirmPassword: new FormControl(""),
//         address: new FormGroup({
//           city: new FormControl(""),
//           state: new FormControl(""),
//           postCode: new FormControl("")
//         })
//       }
//     )

    OnLoad(){
      this.registrationForm.setValue({
        userName: "rutvik",
        password: "test",
        confirmPassword: "test",
        address: {
          city: "Ahmedabad",
          state: "gujrat",
          postCode: "380026",

      }
    })
}
}
