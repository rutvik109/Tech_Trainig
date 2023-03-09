import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  course !: string[];
  ngOnInit() {
    const userData = [
      { id: 1, name: 'rutvik' },
      { id: 1, name: 'kaushik' },
      { id: 1, name: 'harsh' },
      { id: 1, name: 'vivek' },
      { id: 1, name: 'mit' },
      { id: 1, name: 'jay' },
      { id: 1, name: 'ronak' },
      { id: 1, name: 'sahil' },
    ];

    const courseData = [
      { name: 'rutvik', job: { title: 'Anguler', id: 1 } },
      { name: 'kaushik', job: { title: 'ux', id: 1 } },
      { name: 'harsh', job: { title: 'ui', id: 1 } },
      { name: 'vivek', job: { title: 'react', id: 1 } },
      { name: 'mit', job: { title: 'js', id: 1 } },
      { name: 'jay', job: { title: 'html', id: 1 } },
      { name: 'ronak', job: { title: 'css', id: 1 } },
    ];

    const obs1 = from(userData);
    const obs2 = from(courseData);

    obs1
      .pipe(
        map((data) => {
          return 'name = ' + data.name;
        })
        // pluck('name')
      )
      .subscribe((res) => {
        console.log(res);
      });


    obs2.pipe(pluck('job','title'),toArray()).subscribe((res) => {
      console.log(res);
      this.course = res;
    });
  }
}
