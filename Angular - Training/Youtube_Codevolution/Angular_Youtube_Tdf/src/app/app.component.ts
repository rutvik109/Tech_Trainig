import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _enrollmentservice : EnrollmentService){

  }

  title = 'Angular_Youtube_Tdf';

  topics = ["Angular","React","NextJs"];

  hasError = true;

  submitted = false;

  ErrorMsg = "";

  UserModel = new User("","rutvik11@gmail.com",1234567891,"default","morning",false);

  Validate(value : any){
    if(value === "default"){
      return this.hasError = true;
    }
    else{
      return this.hasError = false;
    }
  }

  OnSubmit(){
    this.submitted = true;
    // console.log(this.UserModel);
    this._enrollmentservice.enroll(this.UserModel)
    .subscribe(
      (data) => {console.log(data)},
      (error) => this.ErrorMsg = error.message
    );
  }

}
