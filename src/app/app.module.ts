import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import { AprroverHeaderComponent } from './Header/LoginedHeader/aprrover-header/aprrover-header.component';
import { VolunteerHeaderComponent } from './Header/LoginedHeader/volunteer-header/volunteer-header.component';

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
    VolunteerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
