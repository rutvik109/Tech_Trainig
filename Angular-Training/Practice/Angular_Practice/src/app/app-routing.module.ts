import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Flow/list/list.component';
import { LoginComponent } from './Flow/login/login.component';
import { NavbarComponent } from './Flow/navbar/navbar.component';
import { PageNotFoundComponent } from './Flow/page-not-found/page-not-found.component';
import { SignupComponent } from './Flow/signup/signup.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
