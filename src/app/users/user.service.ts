import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../users-data-table/users-data-table-datasource';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private generateUsersUrl: string;
  private users: IUser[];

  private source: BehaviorSubject<IUser[]>;
  public currentList;

  constructor(private http: HttpClient) {
    this.generateUsersUrl = environment.RAND_USER_API_URL;
    this.users = [];

    this.source = new BehaviorSubject(this.users);
    this.currentList = this.source.asObservable();

    this.fetchUsersData().subscribe(_data => {
      console.log("assign users from users service");
      this.assignUsers(_data.results);
    })    
  }

  private fetchUsersData(): Observable<any> {
    return this.http.get<any>(this.generateUsersUrl);
  }

  private assignUsers(apiUsers: any[]) {
    this.users = this.parseUsers(apiUsers);
    this.source.next(this.users);
  }

  public getData(){
    return this.users;
  }

  public parseUsers(apiUsers: any[]){
    let users:IUser[] = [];
    apiUsers.forEach(apiUser => {
      users.push({
        username: apiUser.login.username,
        firstName: apiUser.name.first,
        lastName: apiUser.name.last,
        email: apiUser.email,
        age: apiUser.dob.age,
        gender: apiUser.gender,
        img: apiUser.picture.medium,
        lat: apiUser.location.coordinates.latitude,
        lng: apiUser.location.coordinates.longitude
      });
    });
    return users;
  }

  public getUserByUsername(username: string | null): User{
    let user!: User;
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].username == username){
        user = this.users[i] as User;
        break;
      }
    }
    return user;
  }
}
