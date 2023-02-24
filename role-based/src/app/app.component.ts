import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'role-based';
  ismenurequired = false;

  constructor(private router : Router){};

  ngDoCheck():void{
      let currenturl = this.router.url;
      if(currenturl === "/login" || currenturl === "/register"){
        this.ismenurequired = false;
      }
      else{
        this.ismenurequired = true;
      }
  }
}
