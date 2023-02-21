import { Component } from '@angular/core';
import { Signup } from '../signup';
import { RestroService } from '../restro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private restroService: RestroService, private router: Router) {}

  user = new Signup('', '');

  alert = false;

  OnSubmit() {
    this.restroService.getUser().subscribe((data) => {
      const euser = data.find((u: any) => {
        return this.user.email === u.email && this.user.password === u.password;
      });
      if (euser) {
        this.router.navigate(['list']);
      } else {
        this.alert = true;
        this.user = new Signup('', '');
      }
    });
  }
}
