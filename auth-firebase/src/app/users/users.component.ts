import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userForm: any;

  user: any[] = [];

  company = [
    'techExtensor',
    'Google',
    'MicroSoft',
    'Amazon',
    'Adobe',
    'IBM',
    'Spotify',
    'Facebook',
  ];

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.userForm = this.fb.group({
      fname: [''],
      mname: [''],
      lname: [''],
      textarea: [''],
      age: [''],
      gender: [''],
      hobby: this.fb.group({
        cricket: [''],
        dancing: [''],
        singing: [''],
        reading: [''],
        treaking: [''],
      }),
      company: [''],
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe((data) => {
      console.log(data);
    });
  }

  OnSubmit() {
    console.log(this.userForm.value);
    this.userService.postUser(this.userForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
