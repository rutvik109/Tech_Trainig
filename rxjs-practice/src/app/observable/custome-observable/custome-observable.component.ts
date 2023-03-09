import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-custome-observable',
  templateUrl: './custome-observable.component.html',
  styleUrls: ['./custome-observable.component.scss'],
})
export class CustomeObservableComponent {
  constructor(private observableSevice: ObservableService) {}
  ngOnInit() {
    let count = 0;
    let Array = ['Angular', 'Js', 'html', 'css', 'Ts'];
    const obs1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next(Array[count++]);
      }, 1000);
      setTimeout(() => {
        observer.next(Array[count++]);
      }, 2000);
      setTimeout(() => {
        observer.next(Array[count++]);
      }, 3000);
      setTimeout(() => {
        observer.next(Array[count++]);
        // observer.error('error');
      }, 4000);
      setTimeout(() => {
        observer.next(Array[count++]);
        observer.complete();
      }, 5000);
    });

    obs1.subscribe(
      (res) => {
        console.log(res);
        this.observableSevice.print(res, 'ulElement');
      },
      (error) => {
        console.log('error occured');
      },
      () => {
        console.log('complete');
      }
    );
  }
}
