import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private url = "/assets/Data/data.json";

  constructor(private http : HttpClient) { }

  getEmployee(): Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this.url)
          .pipe(catchError(this.ErrorHandler));
  }

  ErrorHandler(error : HttpErrorResponse){
      return throwError(error.message || "Server Error");
      
  }
}




// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }

//   getEmployee(){
//     return[
//       {"id" : 1,"name": "Rutvik","age" : 20},
//       {"id" : 2,"name": "Kaushik","age" : 25},
//       {"id" : 3,"name": "Harsh","age" : 26},
//       {"id" : 4,"name": "ronak","age" : 30},
//     ];
//   }
// }
