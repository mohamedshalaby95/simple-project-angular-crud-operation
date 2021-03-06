import { UsersService } from './services/users.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { UsersComponent } from './users/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from "@angular/material/dialog";



import { FormsModule } from '@angular/forms';
import { RigisterComponent } from './auth/components/rigister/rigister.component';
import { LoginComponent } from './auth/components/login/login.component';
import { FakeApiInterceptor } from './inseptor/fake-api.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    UsersComponent,

    RigisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,



  ],
  providers: [
    UsersService,
    // Add the following object to enable the FakeApiInterceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeApiInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
