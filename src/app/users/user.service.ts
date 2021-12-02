import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

const GET_METHOD = "GET";
const LAT_OPEN = "<lat>";
const LAT_CLOSE = "</lat>";
const LNG_OPEN = "<lng>";
const LNG_CLOSE = "</lng>";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private generateUsersUrl: string;
  private MIKES_IMG_PATH: string;

  constructor(private http: HttpClient) {
    this.generateUsersUrl = environment.RAND_USER_API_URL;
    this.MIKES_IMG_PATH = './../../assets/mike.png';
  }

  public fetchUsersData(): Observable<any> {
    return this.http.get<any>(this.generateUsersUrl);
  }

  public parseUsers(apiUsers: any[]) {
    let users: IUser[] = [];
    users.push(this.getMike());
    apiUsers.forEach(apiUser => {
      let u: User = this.generateUser(apiUser);
      this.setCoords({ user: u });
      users.push(u);
    });
    return users;
  }

  public getUserByUsername(username: string, apiUsers: IUser[]): User{
    let users = this.parseUsers(apiUsers);
    for (let i = 0; i < users.length; i++) 
      if (users[i].username == username) 
        return users[i] as User;
    return new User();
  }

  private getUserAddress(user: any) {
    return `${user.location.country} ${user.location.state} ${user.location.city} ${user.location.street.name} ${user.location.street.number}`;
  }

  private setCoords(model: { user: User }) {
    var xhr = new XMLHttpRequest();
    xhr.open(GET_METHOD, this.getGeoCodingURL(model.user), true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        model.user.lat = +xhr.responseText
          .split(LAT_OPEN)[1].split(LAT_CLOSE)[0];
        model.user.lng = +xhr.responseText
          .split(LNG_OPEN)[1].split(LNG_CLOSE)[0];
      } else console.error(xhr.statusText);
    }; xhr.onerror = () => console.error(xhr.statusText);
    xhr.send(null);
  }

  private getGeoCodingURL(user: User) {
    return `${environment.GOOGLE_GEO_API}&address=${encodeURI(user.address)}&sensor=false`;
  }

  private generateUser(apiUser: any) {
    let u: User = {
      username: apiUser.login.username,
      firstName: apiUser.name.first,
      lastName: apiUser.name.last,
      email: apiUser.email,
      age: apiUser.dob.age,
      gender: apiUser.gender,
      img: apiUser.picture.medium,
      address: this.getUserAddress(apiUser),
      lat: apiUser.location.coordinates.latitude,
      lng: apiUser.location.coordinates.longitude,
      getInitials: () => u.firstName[0] + u.lastName[0]
    }; return u;
  }

  private getMike(): IUser { return new User("Mikey", "Mike", "Lasry", "mikelasry123@gmail.com", 29, "male", this.MIKES_IMG_PATH, "Israel Rishon leZion Kaplansky 42", 31.957743690190444, 34.798826934999276); }
}
