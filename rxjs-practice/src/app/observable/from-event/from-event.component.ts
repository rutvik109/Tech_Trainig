import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent {
  @ViewChild('addBtn') addBtn!: ElementRef;
  @ViewChild('removeBtn') removeBtn!: ElementRef;

  constructor(private observableService: ObservableService) {}

  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let val = 'video' + count++;
      this.observableService.print(val, 'ulElement');
      this.observableService.print(val, 'ulElement1');
    });
    fromEvent(this.removeBtn.nativeElement, 'click').subscribe((res) => {
      this.observableService.remove('ulElement1');
    });
  }
}
