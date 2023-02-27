import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UsersComponent } from './users/users.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EmployeeListComponent,
    NavbarComponent,
    AddEmployeeComponent,
    UsersComponent,
    UserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
