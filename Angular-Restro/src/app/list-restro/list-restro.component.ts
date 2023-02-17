import { Component } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css'],
})
export class ListRestroComponent {
  restroList = [];

  constructor(private _restoService: RestoService) {}

  ngOnInit() {
    this._restoService.GetList().subscribe((data) => {
      this.restroList = data;
      console.log(this.restroList);
    });
  }

  Delete(id : any){
    this.restroList.splice(id - 1,1);
    this._restoService.DeleteRestro(id).subscribe(data => console.log(data));
  }

}
