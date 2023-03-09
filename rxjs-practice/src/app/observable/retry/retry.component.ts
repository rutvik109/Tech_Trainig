import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { person } from '../models/persone.interface';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {
  constructor(private http: HttpClient) {}
  person!: person;
  spinner: boolean = false;
  status = 'No Data';
  btn_status = 'Fetch Details';
  fetching = false;

  ngOnInit() {}

  fetchData() {
    this.spinner = true;
    this.btn_status = 'Fetching...';
    this.status = 'Fetching...';
    this.fetching = true;
    this.http
      .get<any>('http://localhost:3000/users')
      .pipe(
        // retry(4)
        retryWhen((error) =>
          error.pipe(
            delay(2000),
            scan((retryCount) => {
              if (retryCount >= 3) {
                throw error;
              } else {
                retryCount++;
                this.status = 'Retrying Attempt # ' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          this.spinner = false;
          this.fetching = false;
          this.status = 'Data Fetched';
          this.btn_status = 'Data Fetched';
          this.person = res;
          console.log(this.person);
        },
        (error) => {
          this.spinner = false;
          this.fetching = false;
          this.status = 'Problem Facing Data';
          console.log(error);
        }
      );
  }
}
