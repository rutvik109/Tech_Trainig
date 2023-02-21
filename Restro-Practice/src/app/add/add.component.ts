import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestroService } from '../restro.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private fb : FormBuilder, private restroService : RestroService){};

  alert= false;

  addForm = this.fb.group(
    {
      name : [''],
      email: [''],
      address: ['']
    }
  ) 

  OnSubmit(){
    this.restroService.postList(this.addForm.value).subscribe((data) =>{
      this.alert = true;
      this.addForm.reset({});      
    })
  }


}
