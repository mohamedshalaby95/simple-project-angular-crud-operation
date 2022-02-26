import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    hobbies: new FormArray([
      new FormControl('')
    ]),
    address: new FormGroup({
      street: new FormControl(''),
      building: new FormControl('')
    }),
    gender: new FormControl('male')
  });
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getHobbiesControls(){
    return (this.registerForm.get('hobbies') as FormArray)?.controls;
  }

  addHobby(){
    (this.registerForm.get('hobbies') as FormArray).push(new FormControl(''))
  }

  register(){
    console.log(this.registerForm);
    this.router.navigate(['/login']);
  }

}
