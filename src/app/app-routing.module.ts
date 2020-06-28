import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component'
import { SignupComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component'
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFlightComponent } from './dashboard/list-flight/list-flight.component';
import { AuthGuard } from './auth/auth.guard';


const route:Routes=[{
  path:'home' ,component:HomeComponent,canActivate:[AuthGuard]
},
{
   path:'signup',component:SignupComponent
 },
{
  path:'signin',component:SigninComponent
},
{
  path:'',component:DashboardComponent
},
{
  path:'listflight' ,component:ListFlightComponent
}]



@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
