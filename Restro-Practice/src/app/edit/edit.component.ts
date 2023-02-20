import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { RestroService } from '../restro.service';
import { Restro } from '../restro';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private route : ActivatedRoute , private restroService : RestroService, private router : Router){}

  id : any;

  restaurant = new Restro("","","");

  ngOnInit(){
   const id = this.route.snapshot.params['id'];
   this.id = +id;
   this.restroService.getIdRestro(this.id).subscribe((data) => {
    this.restaurant = new Restro(data['name'],data['email'],data['address']);
   })
  }

  OnSubmit(){
       this.restroService.putRestro(this.id,this.restaurant).subscribe((data) => console.log(data));
       this.restaurant = new Restro("","","");
      this.router.navigate(['list']);
  }
}
