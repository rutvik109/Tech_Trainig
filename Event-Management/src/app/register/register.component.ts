import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  user = new User('', '');

  OnSubmit() {
    this.authService.registerUser(this.user).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/special']);
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
}
