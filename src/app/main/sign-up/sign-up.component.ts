import { Component, OnInit ,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/User.model'
import {ResponseModel} from '../../models/Response.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

@ViewChild('signUpForm') SignUpForm:NgForm;
 
 public UserList : User[];
  pwdPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  firstnamelastnamepattern="^[a-zA-Z ]*$";
  aadharPattern="^[0-9].{11,11}$"
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.UserListFetchedEvent.subscribe((isFetched)=>{
      if(isFetched)
      {
        this.UserList=this.userService.UserData.data;
      }
    })
    
  }

 
  onSubmit(){
    let user : User=new User()
    user.firstName=this.SignUpForm.value.firstname;
    user.lastName=this.SignUpForm.value.lastname;
    user.email=this.SignUpForm.value.email;
    user.aadharNumber=this.SignUpForm.value.aadharnumber;
    user.password=this.SignUpForm.value.password;
    user.profileImage=this.SignUpForm.value.profileimagelink;
    

  this.userService.PostUser(user).subscribe((response : ResponseModel)=>{
    if(response.success)
    {
      alert(response.message);
    }else
    {
      alert(response.message);

    }
    
  })
  }

  

}
