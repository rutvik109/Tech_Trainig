import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  public selectedId : any;

  departments = [
    {"id" : 1,"name" : "Angular"},
    {"id" : 2,"name" : "Node"},
    {"id" : 3,"name" : "MongoDB"},
    {"id" : 4,"name" : "Ruby"},
    {"id" : 5,"name" : "Bootstrap"},
  ]

 constructor(private router : Router,private route : ActivatedRoute){

 };

 ngOnInit(){
  this.route.paramMap.subscribe((params:ParamMap) =>{
     let id : any = params.get('id');
     this.selectedId = +id;
  })
 }

  OnSelect(department : any){
      // this.router.navigate(['/department',department.id]);
      this.router.navigate([department.id],{relativeTo : this.route})
  }

  isSelected(department: any){
    if(department.id === this.selectedId){
      return true;
    }
    else{
      return false;
    }
  }

}
