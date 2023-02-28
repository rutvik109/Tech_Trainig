import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
