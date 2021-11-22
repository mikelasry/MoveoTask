import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MaterialDesignModule } from './material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersDataTableComponent } from './users-data-table/users-data-table.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ContactUserComponent } from './users/contact-user/contact-user.component';
import {TextFieldModule} from '@angular/cdk/text-field';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersDataTableComponent,
    ContactUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TextFieldModule,

    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    
    CommonModule,
    FormsModule ,
    RouterModule.forRoot([
      {path: "", component:UsersDataTableComponent},
      {path:"details/:username", component: UserDetailsComponent},
      {path:"contact/:username", component: ContactUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
