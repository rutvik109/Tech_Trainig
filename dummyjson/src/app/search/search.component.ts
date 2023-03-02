import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from '../models/userData.interface';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  searchResult : userData[] = []

  ngOnInit() {
    let fname = this.route.snapshot.paramMap.get('query');
    console.log(fname);
    this.userService.searchUser(fname).subscribe((data) => {
      this.searchResult = data;
      console.log(this.searchResult);
    });
  }


}
