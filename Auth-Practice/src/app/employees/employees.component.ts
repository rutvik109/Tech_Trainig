import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  constructor(private employeeService: EmployeeService) {}
  employeeList : any[] = [];
  ngOnInit() {
    this.employeeService.getEmployee().subscribe((data) => {
      this.employeeList.push(data);
      console.log(this.employeeList);
    });
  }
}
