import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css'],
})
export class UpdateRoleComponent {
  roleForm: any;
  id: any;
  roles = ['admin', 'user'];

  crole: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.roleForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      role: [''],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.authService.getById(this.id).subscribe((data) => {
      this.crole = data.role;
      this.roleForm.setValue({
        email: data.email,
        password: data.password,
        username: data.username,
        role: data.role,
      });
    });
  }

  OnUpdate() {
    this.authService
      .updateById(this.id, this.roleForm.value)
      .subscribe((data) => {
        this.router.navigate(['users']);
      });
  }
}
