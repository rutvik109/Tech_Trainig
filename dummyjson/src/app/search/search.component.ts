import { Component, Input } from '@angular/core';
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

  searchResult: userData[] = [];

  ngOnInit() {
    this.userService.searchQuery.subscribe((data: any) => {
      console.log('subject data', data);
      this.searchResult = data;
    });
  }
}
