import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent {
  hpLaptop() {
    return false;
  }

  dellLaptop() {
    return true;
  }

  dell = {
    brand: 'Dell',
    color: 'red',
  };

  hp = {
    brand: 'hp',
    color: 'black',
  };

  ngOnInit() {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('laptop puchased');
      // reject('laptop is not purchased');

      if (this.hpLaptop()) {
        resolve(this.dell);
      } else if (this.dellLaptop()) {
        setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else {
        reject('Laptop is not purchased');
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then block=>', res);
      })
      .catch((res) => {
        console.log('catch block=>', res);
      });
  }

  async fetchData() {
    let promiseData = fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then((response) => response.json());

   let data = await promiseData;

   console.log(data);
  }


}
