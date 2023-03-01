import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private profileService: ProfileService) {}
  user: any;
  image = '';

  userArray: any[] = [];

  ngOnInit() {
    this.profileService.getUser().subscribe((data) => {
      sessionStorage.setItem('user', JSON.stringify(data));
      // this.image = this.user[0]['image'];
      this.user = sessionStorage.getItem('user');
      this.userArray.push(JSON.parse(this.user));
      console.log("Array",this.userArray);  
    });
  }

  
}
