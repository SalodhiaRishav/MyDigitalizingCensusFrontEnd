import { Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import { LoginUser } from 'src/app/models/LoginUser.model';
import {ResponseModel} from '../../models/Response.model';
import { LoginedUser } from 'src/app/models/LoginedUser.model';
import{UserRequestStatusType} from 'src/app/models/enums/UserRequestStatusType';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') LoginForm:NgForm;

constructor(private userService : UserService) { }
  ngOnInit() {
  }
  onSubmit()
  {
    let loginUser : LoginUser = new LoginUser();
    loginUser.email=this.LoginForm.value.email;
    loginUser.password=this.LoginForm.value.password;

    this.userService.PostLoginUser(loginUser).subscribe((data : ResponseModel)=>{
      if(data.success)
      {
        
        let loginedUser:LoginedUser =new LoginedUser();
        loginedUser.id=data.data.id;
        loginedUser.aadharNumber=data.data.aadharNumber;
        loginedUser.createdOn=data.data.createdOn;
        loginedUser.email=data.data.email;
        loginedUser.firstName=data.data.firstName;
        loginedUser.lastName=data.data.lastName;
        loginedUser.modifiedOn=data.data.modifiedOn;
        loginedUser.password=data.data.password;
        loginedUser.profileImage=data.data.profileImage;
        loginedUser.userRequestStatus=data.data.userRequestStatus;
        loginedUser.isApprover=data.data.isApprover;
      //  console.log(UserRequestStatusType[data.data.userRequestStatus];);
        
      sessionStorage['VolunteerId']=loginedUser.id;
      
        
        if(loginedUser.isApprover)
        {
          this.userService.isUserLoggedInAsVolunteer=false;
          this.userService.isUserLoggedInAsApprover=true;
          this.userService.userLoggedInEvent.emit('approver')
       
            
          
        }
        else
        {
          if(loginedUser.userRequestStatus==0||loginedUser.userRequestStatus==1)
          {
            this.userService.isUserLoggedInAsVolunteer=false;
            this.userService.isUserLoggedInAsApprover=false;
            this.userService.userLoggedInEvent.emit('pendingvolunteerrequest')
            this.userService.loginedUserEvent.emit(loginedUser);

          }
          else
          {
            this.userService.isUserLoggedInAsVolunteer=true;
            this.userService.isUserLoggedInAsApprover=false;
            this.userService.userLoggedInEvent.emit('volunteer')
            this.userService.loginedUserEvent.emit(loginedUser);
          }
         
        }
       

       
        
      }
    
    alert(data.message);
    })
  }

}
