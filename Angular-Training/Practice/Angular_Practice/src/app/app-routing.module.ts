import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Flow/list/list.component';
import { LoginComponent } from './Flow/login/login.component';
import { NavbarComponent } from './Flow/navbar/navbar.component';
import { PageNotFoundComponent } from './Flow/page-not-found/page-not-found.component';
import { SignupComponent } from './Flow/signup/signup.component';

const routes: Routes = [
  {path: '' , redirectTo:"login",pathMatch:"full"},
  {path: 'signup' , component:SignupComponent},
  {path: 'login' , component:LoginComponent,
  children:[
    {path:'list', component:ListComponent}
  ]
},
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
