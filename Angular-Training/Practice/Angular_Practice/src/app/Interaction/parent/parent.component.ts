import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public flag = false;

OnSubmit(){
  this.flag = true;
  console.log(this.flag);
}

OnSelect(event:any){
  console.log(event);
}
}
