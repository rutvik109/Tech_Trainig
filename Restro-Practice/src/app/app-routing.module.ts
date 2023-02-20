import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"" , redirectTo:"list" ,pathMatch:"full"},
  {path:"Add" , component: AddComponent},
  {path:"list" , component: ListComponent},
  {path:"list/:id" , component: EditComponent},
  {path:"login" , component: LoginComponent},
  {path:"signup" , component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
