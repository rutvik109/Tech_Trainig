import { Component } from '@angular/core';
import { interval, Subscription, take, takeLast, tap } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent {
  constructor(private observableService: ObservableService) {}
  colors = ['blue', 'red', 'green', 'black', 'pink', 'grey'];
  obsSubsciption!: Subscription;
  myColor!: string;
  ngOnInit() {
    let source = interval(1000);
    this.obsSubsciption = source
      .pipe(
        tap((res) => {
          this.myColor = this.colors[res];

          if (res == 6) {
            this.obsSubsciption.unsubscribe();
          }
        })
      )
      .subscribe((res) => {
        console.log(this.colors[res]);
        this.observableService.print(this.colors[res], 'ulElement');
      });
  }
}
