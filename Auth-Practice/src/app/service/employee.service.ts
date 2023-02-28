import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee-response.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient,private authService : AuthService) { }

  getEmployee(){
    return this.http.get<Employee>("https://auth-angular-7d718-default-rtdb.firebaseio.com/employees.json");
  
  }

}
