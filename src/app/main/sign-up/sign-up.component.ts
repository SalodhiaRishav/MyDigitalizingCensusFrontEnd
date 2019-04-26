import { Component, OnInit ,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/User.model'

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

  isEmailAvailable(email:string)
  {
    let foundeduser:User=this.UserList.find((user:User)=>{
      return user.email === email;
    })
    if(foundeduser)
    {
      return false;
    }
    return true;
  }

  onSubmit(){
    console.log(this.isEmailAvailable(this.SignUpForm.value.email));
  }

  

}
