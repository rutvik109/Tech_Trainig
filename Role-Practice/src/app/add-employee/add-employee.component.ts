import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  empForm: any;

  id: string = '';

  isAddMode: boolean = false;

  employee: any[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.empForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
    });

    if (!this.isAddMode) {
      this.employeeService.getEmpById(this.id).subscribe((data) => {
        this.employee.push(data);

        this.empForm.setValue({
          name: this.employee[0]['name'],
          age: this.employee[0]['age'],
          gender: this.employee[0]['gender'],
        });
      });
    }
  }

  OnSubmit() {
    if (this.isAddMode) {
      this.employeeService.AddEmployee(this.empForm.value).subscribe((data) => {
        console.log(data);
        this.empForm.reset({});
        this.router.navigate(['emplist']);
      });
    } else {
      this.employeeService
        .editEmployee(this.id, this.empForm.value)
        .subscribe((data) => {
          console.log(data);
          this.empForm.reset({});
          this.router.navigate(['emplist']);
        });
    }
  }
}
