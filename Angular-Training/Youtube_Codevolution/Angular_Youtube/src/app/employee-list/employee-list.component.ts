import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  public employees:any[] = [];

  constructor(private _employeeService : EmployeeService){  };

  ngOnInit(){
    this._employeeService.getEmployee()
    .subscribe(data => this.employees = data);
  }
}
