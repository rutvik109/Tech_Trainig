import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }
  print(value: any, id: string) {
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
