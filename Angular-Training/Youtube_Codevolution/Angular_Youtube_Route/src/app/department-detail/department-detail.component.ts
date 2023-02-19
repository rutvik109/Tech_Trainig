import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  public departmentId : any;
  constructor(private route : ActivatedRoute, private router : Router ){};

  ngOnInit(){
        // let id: any = this.route.snapshot.paramMap.get("id");
        // this.departmentId =  +id;
        this.route.paramMap.subscribe((params: ParamMap) => {
            let id : any= params.get('id');
            this.departmentId = +id;
          });
        

  }

  OnPrevious(){
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/department',previousId]);
    this.router.navigate(['../',previousId] , {relativeTo: this.route})
  }

  OnNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department',nextId]);
  }

  OnBack(){
    // this.router.navigate(['/department',{id : this.departmentId}])
    this.router.navigate(['../',{id: this.departmentId}],{relativeTo: this.route})
  }

  OnOverView(){
    this.router.navigate(['overview'] , {relativeTo: this.route})
  }

  OnContact(){
    this.router.navigate(['contact'] , {relativeTo: this.route})
  }

}
