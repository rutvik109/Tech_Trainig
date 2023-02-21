import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input()
 public parentData : any;

 @Output()
 public customeEvent = new EventEmitter();


 OnFire(){
  return this.customeEvent.emit("Child Compoent");
 }
}
