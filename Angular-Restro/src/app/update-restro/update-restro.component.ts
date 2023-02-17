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

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.cid = +id;

    this.restoService
      .fetchRestro(this.cid)
      .subscribe((data) => console.log(data));
  }

  updateRestro = this.fb.group({
    name: [''],
    email: [''],
    address: [''],
  });
}
