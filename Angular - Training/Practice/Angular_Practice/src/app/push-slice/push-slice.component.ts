import { Component } from '@angular/core';

@Component({
  selector: 'app-push-slice',
  templateUrl: './push-slice.component.html',
  styleUrls: ['./push-slice.component.css'],
})
export class PushSliceComponent {
  user:any[] = [];

  AddUser(name : any) {
    this.user.push(
      {
        uname: name.value
      }
    );
    console.log(this.user);
  }

  OnRemove(i : any){
    this.user.splice(i,1);
  }
}
