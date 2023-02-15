import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb : FormBuilder){};

   registrationForm = this.fb.group({
      userName: ["rutvik"],
      password: [""],
      confirmPassword: [""],
      address: this.fb.group({
        city: [""],
        state: [""],
        postCode: [""]
      })
   })

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
