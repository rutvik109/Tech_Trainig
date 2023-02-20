import { Component } from '@angular/core';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  restroList = [];

  constructor(private restroService : RestroService){};

ngOnInit(){
 this.restroService.getList().subscribe(
  (data) => {
    this.restroList = data;
    console.log(this.restroList)
  }
 );
}
  
}
