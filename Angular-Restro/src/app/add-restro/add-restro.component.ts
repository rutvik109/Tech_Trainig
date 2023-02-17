import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { RestoService } from "../resto.service"

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent {

  alert = false;
     
constructor(private restroService : RestoService){}

  addRestro = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl(''),
  })


  PostRestro(){
    this.alert = true;
   this.restroService.AddRestro(this.addRestro.value).subscribe(result => console.log(result)); 
   this.addRestro.reset({});
  }

  closeAlert(){
    this.alert = false;
  }

}        
