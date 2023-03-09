import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { userData } from '../models/userData.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  data1!: userData[];
  data2!: userData[];
  data3!: userData[];
  ngOnInit() {
    const userData = [
      { id: 1, name: 'rutvik', gender: 'male' },
      { id: 2, name: 'kaushik', gender: 'female' },
      { id: 3, name: 'harsh', gender: 'male' },
      { id: 4, name: 'vivek', gender: 'female' },
      { id: 5, name: 'mit', gender: 'male' },
      { id: 6, name: 'jay', gender: 'male' },
      { id: 7, name: 'ronak', gender: 'female' },
      { id: 8, name: 'sahil', gender: 'male' },
    ];

    const obs1 = from(userData);

    obs1
      .pipe(
        filter((data) => data.name.length >= 5),
        toArray()
      )
      .subscribe((data) => {
        (this.data1 = data), console.log('data 1', data);
      });

    const obs2 = from(userData);
    obs2
      .pipe(
        filter((data) => data.gender == 'female'),
        toArray()
      )
      .subscribe((data) => {
        (this.data2 = data), console.log('data 2', data);
      });

    const obs3 = from(userData);
    obs3
      .pipe(
        filter((data) => data.id <= 5),
        toArray()
      )
      .subscribe((data) => {
        (this.data3 = data), console.log('data 3', data);
      });
  }
}
