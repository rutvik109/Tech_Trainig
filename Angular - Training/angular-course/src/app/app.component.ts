import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from "./model/course"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


OnCourseSelected(course: Course){
  console.log("Custome CourseSelected",course);
}


appClicked(){
  console.log("App button Clicked");
}


coreCourse = COURSES[0];
rxjsCourse = COURSES[1];
ngrxCourse = COURSES[2];


}
