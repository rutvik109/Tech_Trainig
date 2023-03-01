import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  image: any;
  userData: any;
  constructor(private profileService: ProfileService) {
    this.profileService.getUser().subscribe((data) => {
      this.userData = data;
      this.image = this.userData.image;
    });
  }
}
