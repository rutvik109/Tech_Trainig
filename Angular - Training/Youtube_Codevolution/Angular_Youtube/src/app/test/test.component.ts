import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

//---------------------------------------------------------------------------------------------------------------------

// Properties

// interpolation

public name = "rutvik";

// property binding

public myid = "myID-test";

public isDisabled = false;

// class binding

public component_class = "text-danger";

public hasError = true;

public messageClass = {
  "text-danger" : this.hasError,
  "text-special" : !this.hasError
};

// style binding

public text_color = "red";

public messageStyle = {
  color:'red',
  fontStyle : "italic"
}

// event binding 

// Use of $event variable to get all the information about event

// without using event Handler

public buttonClick = " "; 

// Two Way Binding - ngModel

public mname = " ";

// ngIf Directive

public displayName = false;

// ngSwitch

public swichName = "white";

// ngFor

public colors = ["red","blue","green","white"];

//Pipes

public pname = "rutvik";

public pmessage = "my name is rutvik";

public pjson = {
  pjname: "rutvik",
  pjmessage: "my name is rutvik"
}

public date = new Date();


//---------------------------------------------------------------------------------------------------------------------

// input and output decorators

@Input() public Parent_to_Childe : any;

@Output() public childEvent = new EventEmitter();


//---------------------------------------------------------------------------------------------------------------------

// functions


// interpolation

getName (){
  return "Name via function is" + " " +this.name;
}

// event binding

Onclick (){
  console.log("button clicked");
  this.buttonClick = "data will be added on click into property";
}


// Use of $event variable to get all the information about event

OnClick (event : any){
  console.log(event);
  this.buttonClick = event.type;
}

// Template Reference Variables 
// used to easily access DOM elements and property 

template(value: any){
  console.log(value);
}


// send Data from child to Parent_to_Childe
// Output Decorator 


OnFire(){
  this.childEvent.emit("Data from child to Parent");
}




}
