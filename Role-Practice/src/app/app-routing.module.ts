import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthComponent } from './auth/auth.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'emplist',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'add/:id',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/:id',
    component: UserUpdateComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
