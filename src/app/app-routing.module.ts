
import { AuthGuardService } from './auth/gardes/auth-guard-service';
import { LoginComponent } from './auth/components/login/login.component';
import { RigisterComponent } from './auth/components/rigister/rigister.component';
import { UsersComponent } from './users/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'register', component: RigisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: UsersComponent, canActivate: [AuthGuardService] }
];
/**
 * - you might need to add an additional guard, to prevent the user
 * from (re-visiting/going back to) the login page (in case he/she is already logged in) 
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
