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
  SelectedCourse = new EventEmitter();


  OnSelectedCourse(){
    this.SelectedCourse.emit(this.course);
  }


  
  

}
