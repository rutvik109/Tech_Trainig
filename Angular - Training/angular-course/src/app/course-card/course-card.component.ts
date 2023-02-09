import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course !: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();


  cardClick (){
    console.log("card button clicked");

    this.courseSelected.emit(this.course);
  }

}
