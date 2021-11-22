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

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        let username = params.get('username');
        this.currentUser = this.userService.getUserByUsername(username);
        this.emailModel = new Email(this.currentUser);
      });
  }


  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  
  onSubmit(f: NgForm) {

    // npm install & use smtp-client to send email
    // $ npm install --save smtp-client
    // docs at: https://www.npmjs.com/package/smtp-client
    alert("email sent");
  }
}
