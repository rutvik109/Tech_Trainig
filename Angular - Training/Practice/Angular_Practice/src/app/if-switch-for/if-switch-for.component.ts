import { Component } from '@angular/core';

@Component({
  selector: 'app-if-switch-for',
  templateUrl: './if-switch-for.component.html',
  styleUrls: ['./if-switch-for.component.css']
})
export class IfSwitchForComponent {

indicator = true;

swichValue:string = " ";

array = [1,2,3,4,5];

users = [
  {
    name : "rutvik" , id : 1
  },
  {
    name : "kevin" , id : 2
  },
  {
    name : "kaushal" , id : 3
  }
]

OnChange(){
  this.indicator = false;
}

OnSwitch(event : any){
  this.swichValue = event.target.value;
}

}
