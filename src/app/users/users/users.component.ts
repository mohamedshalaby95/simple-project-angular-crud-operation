import { UsersService } from './../../services/users.service';

import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import{AddUserComponent} from '../add-user//add-user.component'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  headers:string[]=["id","name","phone","address"]

  constructor(private UserApi:UsersService
     ,private dialog: MatDialog) {


   }
  users: User[] = [];
  ngOnInit(): void {
    this.UserApi.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(users)
      },
      error: (err) => {
        console.log(err);
      },

    });


  }

  openAddModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(AddUserComponent, dialogConfig);
  }

}
