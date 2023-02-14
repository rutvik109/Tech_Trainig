import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Youtube_Tdf';

  topics = ["Angular","React","NextJs"];

  UserModel = new User("","rutvik11@gmail.com",12345678910,"Angular","morning",false);
}
