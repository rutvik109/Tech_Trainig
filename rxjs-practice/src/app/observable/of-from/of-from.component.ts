import { Component } from '@angular/core';
import { from, of, take, toArray } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';
import { ofObject } from '../models/ofObject.interface';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent {
  constructor(private observableService: ObservableService) {}
  obsMsg!: ofObject;
  ngOnInit() {
    //of operator
    const obs1 = of({ a: 'rutvik', b: 'harshh', c: 'kaushik' });
    const obs2 = of('rutvik', 'harsh', 'kaushik');

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise Data');
      }, 3000);
    });

    obs2.subscribe((res) => {
      this.observableService.print(res, 'ulElement2');
    });

    obs1.subscribe((res) => {
      this.obsMsg = res;
    });

    //from operator

    const obs3 = from(['rutvik', 'harsh', 'kaushik']);
    const obs4 = from(promise);
    const obs5 = from('my name is rutvik');

    //toArray
    const obs6 = from([
      { name: 'rutvik', id: 1 },
      { name: 'rutvik', id: 1 },
      { name: 'rutvik', id: 1 },
      { name: 'rutvik', id: 1 },
    ]);

    obs3.subscribe((res) => {
      this.observableService.print(res, 'ulElement3');
    });

    obs4.subscribe((res) => {
      this.observableService.print(res, 'ulElement4');
    });

    obs5.subscribe((res) => {
      this.observableService.print(res, 'ulElement5');
    });

    //toArray
    obs6.pipe(take(2), toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
