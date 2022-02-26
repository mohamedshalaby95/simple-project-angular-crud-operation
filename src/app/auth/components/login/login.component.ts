import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService , private router:Router) { }

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(`^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$`), Validators.required]),
    password: new FormControl('', [Validators.required ])
  })

  ngOnInit(): void {
  }

  login() {

    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.controls['password'].value)

this.authService.login({email:this.loginFormGroup.controls['email'].value,password:this.loginFormGroup.controls['password'].value}).subscribe((res)=>{
  console.log(res)
localStorage.setItem('user', JSON.stringify((res as any).data))
if((res as any).token )
{
  console.log("here")
  localStorage.setItem('token', (res as any).token  );

}
this.router.navigate(['/']);
})
    }
  }

}
