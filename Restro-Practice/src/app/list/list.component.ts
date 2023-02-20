import { Component } from '@angular/core';
import { RestroService } from '../restro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  restroList = [];

  constructor(private restroService : RestroService, private router : Router){};

ngOnInit(){
 this.restroService.getList().subscribe(
  (data) => {
    this.restroList = data;
    console.log(this.restroList)
  }
 );
}

Delete(id : any){
  this.restroList.splice(id - 1,1);
   this.restroService.deleteRestro(id).subscribe()
}

Update(id : any){
this.router.navigate([`list/${id}`]);
}
  
}
