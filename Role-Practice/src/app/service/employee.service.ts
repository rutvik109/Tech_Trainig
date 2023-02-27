import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

 url = "http://localhost:3000/employees";

  AddEmployee(inputs : any){
    return this.http.post<any>(this.url,inputs)
  }

  ListEmployee(){
    return this.http.get<any>(this.url);
  }

  getEmpById(id:any){
    return this.http.get<any>(this.url+'/'+id);
  }

  editEmployee(id:any,data:any){
    return this.http.put<any>(this.url+"/"+id,data)
  }

  deleteById(id : any){
    return this.http.delete<any>(this.url+'/'+id);
  }
}
