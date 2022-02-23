import { UsersService } from './services/users.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './users/add-user/add-user.component';

import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,


  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
