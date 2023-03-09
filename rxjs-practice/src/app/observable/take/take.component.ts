import { Component } from '@angular/core';
import { from, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent {
  constructor(private observableService: ObservableService) {}
  colors = ['blue', 'red', 'green', 'black', 'pink', 'grey'];

  
  ngOnInit() {
    let count = interval(1000);
    let condition = timer(5000);

    const obs1 = from(this.colors);
    obs1.pipe(take(5)).subscribe((res) => {
      this.observableService.print(res, 'ulElement');
    });
    obs1.pipe(takeLast(5)).subscribe((res) => {
      this.observableService.print(res, 'ulElement2');
    });
    count.pipe(takeUntil(condition)).subscribe((res) => {
      this.observableService.print(res, 'ulElement3'), console.log(res);
    });
  }
}
