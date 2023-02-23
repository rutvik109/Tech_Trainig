import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  user = new User('', '');

  OnSubmit() {
    this.authService.registerUser(this.user).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
