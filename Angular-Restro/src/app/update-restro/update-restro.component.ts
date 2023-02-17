import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent {

  updateRestro = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl(''),
  })

}
