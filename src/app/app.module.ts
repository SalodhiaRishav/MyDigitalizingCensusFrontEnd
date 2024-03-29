import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './Main/sign-up/sign-up.component';
import { LoginComponent } from './Main/login/login.component';
import { UserComponent } from './Main/user/user.component';
import { HomeHeaderComponent } from './Header/home-header/home-header.component';
import { ApproverComponent } from './Main/User/approver/approver.component';
import { DeclinedUserComponent } from './Main/User/Approver/declined-user/declined-user.component';
import { AcceptedUserComponent } from './Main/User/Approver/accepted-user/accepted-user.component';
import { PendingUserComponent } from './Main/User/Approver/pending-user/pending-user.component';
import { VolunteerComponent } from './Main/User/volunteer/volunteer.component';
import { HouseComponent } from './Main/User/volunteer/house/house.component';
import { HouseMemberComponent } from './Main/User/volunteer/house-member/house-member.component';
import { AprroverHeaderComponent } from './Header/LoginedHeader/aprrover-header/aprrover-header.component';
import { VolunteerHeaderComponent } from './Header/LoginedHeader/volunteer-header/volunteer-header.component';
import { UniqueEmailValidatorDirective } from './customdirectives/unique-email-validator.directive';
import { UserService } from './services/user.service';
import { UniqueAdhaarValidatorDirective } from './customdirectives/unique-adhaar-validator.directive';
import { ApproverRequestService } from './services/approverequest.service';
import { HouseService } from './services/house.service';
import { HouseMemberService } from './services/housemember.service';
import { HousecensusexistsValidatorDirective } from './customdirectives/housecensusexists-validator.directive';
import { PendingrequestComponent } from './main/user/pendingrequest/pendingrequest.component';
import { DeclinedrequestComponent } from './main/user/declinedrequest/declinedrequest.component';
import { PendingdeclinedrequestheaderComponent } from './header/pendingdeclinedrequestheader/pendingdeclinedrequestheader.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { VolunteerAuthGuardService } from './services/volunteer.auth-guard.service';
import { ApproverAuthGuardService } from './services/approver.auth-guard.service';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    UserComponent,
    HomeHeaderComponent,
    ApproverComponent,
    DeclinedUserComponent,
    AcceptedUserComponent,
    PendingUserComponent,
    VolunteerComponent,
    AprroverHeaderComponent,
    VolunteerHeaderComponent,
    UniqueEmailValidatorDirective,
    UniqueAdhaarValidatorDirective,
    HouseComponent,
    HouseMemberComponent,
    HousecensusexistsValidatorDirective,
    PendingrequestComponent,
    DeclinedrequestComponent,
    PendingdeclinedrequestheaderComponent,
    NotfoundComponent,
    Landingpage2Component
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,
    ApproverRequestService,
    HouseService,
    HouseMemberService,
    VolunteerAuthGuardService,
    ApproverAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
