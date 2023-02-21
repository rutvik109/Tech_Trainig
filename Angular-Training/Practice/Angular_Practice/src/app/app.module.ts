import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from  "@angular/forms";

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { IfSwitchForComponent } from './if-switch-for/if-switch-for.component';
import { PushSliceComponent } from './push-slice/push-slice.component';
import { ParentComponent } from './Interaction/parent/parent.component';
import { ChildComponent } from './Interaction/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Flow/login/login.component';
import { SignupComponent } from './Flow/signup/signup.component';
import { ListComponent } from './Flow/list/list.component';
import { NavbarComponent } from './Flow/navbar/navbar.component';
import { PageNotFoundComponent } from './Flow/page-not-found/page-not-found.component';
import { TdfComponent } from './tdf/tdf/tdf.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleClassComponent,
    IfSwitchForComponent,
    PushSliceComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    SignupComponent,
    ListComponent,
    NavbarComponent,
    PageNotFoundComponent,
    TdfComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
