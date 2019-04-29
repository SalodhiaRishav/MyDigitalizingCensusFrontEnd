import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Main/sign-up/sign-up.component';
import { LoginComponent } from './Main/login/login.component';
import { DeclinedUserComponent } from './Main/User/Approver/declined-user/declined-user.component';
import { PendingUserComponent } from './Main/User/Approver/pending-user/pending-user.component';
import { AcceptedUserComponent } from './Main/User/Approver/accepted-user/accepted-user.component';
import { HouseComponent } from './Main/User/volunteer/house/house.component';
import { HouseMemberComponent } from './Main/User/volunteer/house-member/house-member.component';
import { PendingrequestComponent } from 'src/app/main/user/pendingrequest/pendingrequest.component';
import { DeclinedrequestComponent } from 'src/app/main/user/declinedrequest/declinedrequest.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component:SignUpComponent  },
  {path:'login',component:LoginComponent},
  {path:'pending',component:PendingUserComponent},
  {path:'declined',component:DeclinedUserComponent},
  {path:'approved',component:AcceptedUserComponent},
  {path:'house',component:HouseComponent},
  {path:'housemember',component:HouseMemberComponent},
  {path:'pendingrequest',component:PendingrequestComponent},
  {path:'declinedrequest',component:DeclinedrequestComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
