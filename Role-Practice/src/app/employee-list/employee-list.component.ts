import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  empList = [];

  isadmin = false;

  role: any = 'user';

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.employeeService.ListEmployee().subscribe((data) => {
      this.empList = data;
    });
  }

  ngDoCheck() {
    this.role = this.authService.getRole();
    if (this.role == 'admin') {
      this.isadmin = true;
    }
  }

  Update(id: any) {
    this.router.navigate([`add/${id}`]);
  }

  Delete(id : any){
    this.employeeService.deleteById(id).subscribe((data)=>{console.log(data)});
    this.empList.splice(id-1,1);
  }
}
