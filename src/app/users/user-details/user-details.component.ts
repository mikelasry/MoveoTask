import { Component, OnInit } from '@angular/core';
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

  constructor(
      private userService: UserService, 
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let username = params.get('username');
      if(username == null) return;

      this. userService.fetchUsersData().subscribe(data =>{
        this.currentUser = this.userService.getUserByUsername(username!, data.results);
        this.currentUser.img = this.currentUser.img.replace("/med", "");
        this.loadMap(this.newLoader());
      })
    });
  }

  private newLoader() {
    return new Loader({
      apiKey: environment.GOOGLE_API_KEY,
      language: "iw",
    });
  }

  private loadMap(loader: Loader) {
    console.log("loading map........");
    loader.load().then(() => {      
      var lat_lng_pair = new google.maps.LatLng(this.currentUser.lat, this.currentUser.lng);
      let lat = lat_lng_pair.lat();
      let lng = lat_lng_pair.lng();
      const map = new google.maps.Map(
        document.getElementById("map")!, {
          center: { 
            lat:  lat, 
            lng:  lng, 
          }, zoom: 8,
        });
        
        
        console.log("user:");
        console.log(this.currentUser);
      const marker = new google.maps.Marker({
        position: { lat: lat, lng: lng},
      }); marker.setMap(map);

    });
  }

}
