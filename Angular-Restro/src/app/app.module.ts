import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { LoginRestroComponent } from './login-restro/login-restro.component';
import { RegisterRestroComponent } from './register-restro/register-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    ListRestroComponent,
    LoginRestroComponent,
    RegisterRestroComponent,
    UpdateRestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
