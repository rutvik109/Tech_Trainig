import { Component } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.css']
})
export class StyleClassComponent {
 enabled = true;

 myClass = {
  class1 : {},
  class2 : {},
  class3 : {}
 }

 myBorder = "5px solid black";

 message = "";

 twoway = "rutvik";
 myStyle = {
   "border" : "5px solid black",
   "background-color" : "green"
 }


 myFunction(){
  console.log("button clicked");
 }
 
 
 OnBlure(){
  console.log("blur")
 }

 OnClick(event : any){
    this.message = event.target.value + " Added"
 }

 onReference(inputName : any){
  console.log(inputName.value)
 }
}
