import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { user } from '../models/users.interface';

@Component({
  selector: 'app-debounce-distinctuntillchanged',
  templateUrl: './debounce-distinctuntillchanged.component.html',
  styleUrls: ['./debounce-distinctuntillchanged.component.scss'],
})
export class DebounceDistinctuntillchangedComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  @ViewChild('inputSearch2') inputSearch2!: ElementRef;

  reqData !: string;
  reqData2 !: string;

  ngAfterViewInit() {
    const searchTerm = fromEvent<user>(
      this.inputSearch.nativeElement,
      'keyup'
    ).pipe(
      map((res) => res.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe((res) => {
      this.reqData = res;
      console.log(this.reqData);
    });


    const searchTerm2 = fromEvent<user>(
      this.inputSearch2.nativeElement,
      'keyup'
    ).pipe(
      map((res) => res.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm2.subscribe((res) => {
      this.reqData2 = res;
      console.log(this.reqData2);
    });
  }
}
