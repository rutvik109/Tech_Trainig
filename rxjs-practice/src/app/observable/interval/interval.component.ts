import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
  ObservableMsg!: string;
  videoSubscription!: Subscription;
  constructor(private observableService: ObservableService) {}

  ngOnInit() {
    //timer(delay,interval)
    //const brodCastVideo = timer(5000,1000);
    const brodCastVideo = interval(1000);
    this.videoSubscription = brodCastVideo.subscribe((res) => {
      this.ObservableMsg = 'Video ' + res.toString();
      this.observableService.print(this.ObservableMsg, 'ulElement');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
