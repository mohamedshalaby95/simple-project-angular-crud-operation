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

  constructor(private authService: AuthService, private router: Router) { }

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(`^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$`), Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  login() {

    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.controls['password'].value)
      /**
       * - You shouldn't have to use (any), the subscription response(res) 
       * already has its own type (object). To fix that you might need to define
       * a type for the response (instead of just object) 
       * for example:
       * type Response<T> = {
       *  result:T,
       *  message:string,
       *  success:boolean
       * }
       * and 'T' is a generic, it might be anything (i.e Users or boolean)
       * -------
       * - Try destroy the object instead
       * as : 
       */
      const { email, password } = this.loginFormGroup.value;
      /**
       * and then pass (email, password) as parameters of this.authService.login(email, password)
       */
      this.authService.login({ email: this.loginFormGroup.controls['email'].value, password: this.loginFormGroup.controls['password'].value }).subscribe((res) => {
        console.log(res)
        /**
         * In real life cases you will not need to store the user data, it's already fetched using the token
         *  
         */
        localStorage.setItem('user', JSON.stringify((res as any).data))
        if ((res as any).token) {
          console.log("here")
          localStorage.setItem('token', (res as any).token);

        }
        this.router.navigate(['/']);
      })
    }
  }

}
