import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent {
  constructor() {}
  @ViewChild('addBtn') addBtn!: ElementRef;
  @ViewChild('removeBtn') removeBtn!: ElementRef;

  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let val = 'video' + count++;
      this.print(val, 'ulElement');
      this.print(val, 'ulElement1');
    });
    fromEvent(this.removeBtn.nativeElement, 'click').subscribe((res) => {
      this.remove('ulElement1');
    });
  }

  print(value: string, id: string) {
    let li = document.createElement('li');
    li.textContent = value;
    document.getElementById(id)?.appendChild(li);
  }

  remove(id: string) {
    const list = document.getElementById(id);
    const lastChild = list?.lastElementChild;
    if (lastChild !== undefined && lastChild !== null && list !== null) {
      list.removeChild(lastChild);
    }
  }

  
}
