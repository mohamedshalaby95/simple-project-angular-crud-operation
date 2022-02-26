
import { AuthGuardService } from './auth/gardes/auth-guard-service';
import { LoginComponent } from './auth/components/login/login.component';
import { RigisterComponent } from './auth/components/rigister/rigister.component';
import { UsersComponent } from './users/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'register', component:RigisterComponent  },
  { path: 'login', component:LoginComponent  },
  { path: '', component: UsersComponent , canActivate: [AuthGuardService]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
