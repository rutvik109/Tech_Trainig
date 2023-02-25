import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  userData: any;

  loginForm = this.fb.group({
    id: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.GetByCode(this.loginForm.value.id).subscribe((data) => {
        this.userData = data;
        console.log(this.userData);
        if (this.userData.password === this.loginForm.value.password) {
          if (this.userData.isactive) {
            sessionStorage.setItem('username', this.userData.id);
            sessionStorage.setItem('userrole', this.userData.role);
            this.router.navigate(['']);
          } else {
            this.toastr.warning('Please Contact Admin', 'in Active User');
          }
        } else {
          this.toastr.warning('Invalid credentials');
        }
      });
    }
  }
}
