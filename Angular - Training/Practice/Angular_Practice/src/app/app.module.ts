import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  "@angular/forms";

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { IfSwitchForComponent } from './if-switch-for/if-switch-for.component';
import { PushSliceComponent } from './push-slice/push-slice.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleClassComponent,
    IfSwitchForComponent,
    PushSliceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
