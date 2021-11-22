import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/users-data-table/users-data-table-datasource';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public currentUser!: User;
  public userPictureUrl: string | undefined;

  lat = 51.678418;
  lng = 7.809007;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let username = params.get('username');
      this.currentUser = this.userService.getUserByUsername(username);
      this.userPictureUrl = this.currentUser.img.replace("/med", "");
      this.loadMap(this.newLoader());
    });
  }

  private newLoader() {
    return new Loader({
      apiKey: environment.GOOGLE_API_KEY,
      language: "iw",
    });
  }

  private loadMap(loader: Loader) {
    loader.load().then(() => {
      
      const map = new google.maps.Map(
        document.getElementById("map")!, {
          center: { 
            lat: this.lat, 
            lng: this.lng 
          }, zoom: 8,
        });

      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
      }); marker.setMap(map);

    });
  }
}
