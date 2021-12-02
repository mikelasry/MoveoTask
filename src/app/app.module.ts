import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UsersDataTableComponent } from './users-data-table/users-data-table.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ContactUserComponent } from './users/contact-user/contact-user.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TextFieldModule} from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialDesignModule } from './material-design/material-design.module';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    UsersDataTableComponent,
    UserDetailsComponent,
    ContactUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
        
    TextFieldModule,
    CommonModule,
    FormsModule ,
    
    MaterialDesignModule,
    
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component:UsersDataTableComponent},
      {path: environment.DETAILS_URL, component: UserDetailsComponent},
      {path: environment.CONTACT_URL, component: ContactUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
