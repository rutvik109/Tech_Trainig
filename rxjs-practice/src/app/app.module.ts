import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomeObservableComponent } from './observable/custome-observable/custome-observable.component';
import { MapComponent } from './observable/map/map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceDistinctuntillchangedComponent } from './observable/debounce-distinctuntillchanged/debounce-distinctuntillchanged.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    NavbarComponent,
    IntervalComponent,
    OfFromComponent,
    CustomeObservableComponent,
    MapComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceDistinctuntillchangedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
