import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

constructor(private eventSerivce : EventService){}

EventList :any[] = [];

ngOnInit(){
  this.eventSerivce.getEvents().subscribe((res => this.EventList =res));
  console.log(this.EventList);
}



}
