import { UsersService } from './../../services/users.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {User} from '../../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {

  headers:string[]=["id","name","phone","address","acess"]
@ViewChild('closePopup') closePopup:ElementRef
@ViewChild('closePopupedit') closePopupedit:ElementRef

  constructor(private UserApi:UsersService
     ,private dialog: MatDialog, ) {


   }
  users: User[] = [];
  id:number;

  ngOnInit(): void {
    // console.log(this.modelRef.nativeElement)
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






  deleteUser(event: any, id: number) {
    event.stopPropagation();

    if (confirm('Are you sure you want to delete this user?!')) {
      this.UserApi.deleteUserById(id).subscribe({
        next: () => {
          this.users = this.users.filter((u) => u.id !== id);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  addForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),

  });
  editForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),

  });
  addUser() {


    const { value, valid, dirty } = this.addForm;

    if (!valid || !dirty) return;


      //add

      this.UserApi
        .addUser({
          name: value.name,
          email: value.email,
         username: 'ahmed ahmed',
          address: {
            street: value.street,
            suite: value.country,
            city: value.city,
          zipcode: '92998-3874',
           geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: value.phone,
         website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        })
        .subscribe({
          next: (user) => {
           this.users.push(user);


            this.addForm.reset();
           this. closePopup.nativeElement.click()


          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
          alert("you add new users successfull")
          }
        });

  }
  setValueUser(user:User){
    this.id=user.id
this.editForm.setValue({
  name:user.name,
  email:user.email,
  phone:user.phone,
  street:user.address.street,
  city:user.address.city,
  country:user.address.suite

})


  }
  editUser(value:any){
    console.log(this.editForm.controls)
let user=this.users.find((e)=> {if(e.id==this.id){
  {
    e. name = this.editForm.controls["name"].value;
    e.email= this.editForm.controls["email"].value;
    e.phone= this.editForm.controls["phone"].value;
   e.username= 'ahmed ahmed';

    e.address= {
     street:this.editForm.controls["street"].value,
   suite: this.editForm.controls["country"].value,
     city:this.editForm.controls["city"].value,
     zipcode: '92998-3874',
           geo: {
              lat: '-37.3159',
              lng: '81.1496',
            }
    }



  }

}} );
this. closePopupedit.nativeElement.click()
  }


}
