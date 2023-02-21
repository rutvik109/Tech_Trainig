import { Component } from '@angular/core';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

user = new Login("","");

OnSubmit(){
  console.log();
}

}
