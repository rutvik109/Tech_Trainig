import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router : Router
  ) {
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
      role: [''],
    });
  }

  userForm: any;

  id: any;

  user: any[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.authService.getUserById(this.id).subscribe((data) => {
      this.user.push(data);
      this.userForm.setValue({
        email: this.user[0]['email'],
        password: this.user[0]['password'],
        role: this.user[0]['role'],
      });
    });
  }

  OnSubmit() {
    this.authService
      .updateUser(this.id, this.userForm.value)
      .subscribe((data) => {
        console.log(data);
        this.userForm.reset({});
        this.router.navigate(['/users'])
      });
  }
}
