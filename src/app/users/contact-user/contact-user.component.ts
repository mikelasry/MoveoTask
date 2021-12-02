import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.js';

import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

import { environment } from './../../../../src/environments/environment';
import { UserService } from './../../users/user.service'


export class Email {
  host: string;
  username: string;
  password: string;
  to: string;
  from: string;
  body: string;
  constructor(addressee: User) {
    this.host = environment.SMTP_HOST;
    this.username = environment.ADDRESSED
    this.password = environment.SMTP_API_KEY,
      this.to = addressee.email;
    this.from = environment.ADDRESSED;
    this.body = "";
  }
}

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.css']
})
export class ContactUserComponent implements OnInit {

  emailModel!: Email;
  currentUser!: User;
  userPictureUrl!: string;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private _ngZone: NgZone) { }


  ngOnInit(): void {
    this.currentUser = this.newDefaultUser();
    this.activatedRoute.paramMap.subscribe(
      params => {
        let username = params.get('username');
        this.userService.fetchUsersData().subscribe(data => {
          this.currentUser = this.userService.getUserByUsername(username!, data.results);
          this.emailModel = new Email(this.currentUser);
        });
      });
  }

  newDefaultUser(): User {
    return {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      gender: "",
      img: "",
      address: "",
      lat: 0,
      lng: 0,
      getInitials: () => { return this.currentUser.firstName[0] + this.currentUser.lastName[0]; }
    }
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      alert("Both subject and email body reuired!");
      return;
    }

    // npm install & use smtp-client to send email
    // $ npm install --save smtp-client
    // docs at: https://www.npmjs.com/package/smtp-client

    this.dclareEmailSent(form);
    this.clearInputs(form)
  }
  
  private dclareEmailSent(form: NgForm) {
    alert(`${form.value.body.trim()}
      \nSent to: ${this.currentUser.email}
      \nAbout: ${form.value.subject.trim()}`
    );
  }

  private clearInputs(form: NgForm) {
    form.reset();
  }
}
