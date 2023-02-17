import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css'],
})
export class UpdateRestroComponent {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private restoService: RestoService
  ) {}

  public cid: any;

  alert = false;

  closeAlert(){
    this.alert = false;
  }

  updateRestro = this.fb.group({
    name: [""],
    email: [""],
    address: [""],
  });

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.cid = +id;

    this.restoService
      .fetchRestro(this.cid)
      .subscribe((data) => {
        this.updateRestro = this.fb.group({
          name: [data.name],
          email: [data.email],
          address: [data.address],
        });
      });
  }

  editRestro(){
    this.alert = true;
     this.restoService.putRestro(this.cid,this.updateRestro.value).subscribe(data => console.log(data));
     this.updateRestro.reset({});
  }
  
}
