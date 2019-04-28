import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Main/sign-up/sign-up.component';
import { LoginComponent } from './Main/login/login.component';
import { DeclinedUserComponent } from './Main/User/Approver/declined-user/declined-user.component';
import { PendingUserComponent } from './Main/User/Approver/pending-user/pending-user.component';
import { AcceptedUserComponent } from './Main/User/Approver/accepted-user/accepted-user.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component:SignUpComponent  },
  {path:'login',component:LoginComponent},
  {path:'pending',component:PendingUserComponent},
  {path:'declined',component:DeclinedUserComponent},
  {path:'approved',component:AcceptedUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
