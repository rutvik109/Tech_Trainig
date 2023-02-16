import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { FormBuilder , Validators, FormArray} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb : FormBuilder){};
 
  registrationForm : any;
  
  get UserName(){
    return this.registrationForm.controls['userName'];
  }

  get Email(){
    return this.registrationForm.controls['email'];
  }

  get alterEmails(){
    return this.registrationForm.controls['alternateEmails']  ;
  }

  
  addAlternateEmail() {
    this.alterEmails.push(this.fb.control(''));
  }

  ngOnInit(){
    this.registrationForm = this.fb.group({
      userName: ["", [Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
      email: "",
      subscribe: [false],
      password: [""],
      confirmPassword: [""],
      address: this.fb.group({
        city: [""],
        state: [""],
        postCode: [""]
      }),
      alternateEmails: this.fb.array([])
   },{validator : PasswordValidator})

   this.registrationForm.controls['subscribe'].valueChanges.subscribe((checkedValue : any) => {
      const email = this.registrationForm.controls['email'];
      if(checkedValue){
        email.setValidators(Validators.required);
      }
      else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }

   

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
        email: "",
        subscribe: [false],
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
