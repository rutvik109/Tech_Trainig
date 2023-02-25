import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent {
  constructor(private specialService: EventService, private router : Router) {}

  specialEvent: any[] = [];

  ngOnInit() {
    this.specialService
      .getEvents()
      .subscribe((res) => (this.specialEvent = res),
      (err) =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
              this.router.navigate(["login"]);
          }
        }
      });
    console.log(this.specialEvent);
  }
}
