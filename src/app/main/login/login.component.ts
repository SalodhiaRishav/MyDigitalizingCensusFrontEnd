import { Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import { LoginUser } from 'src/app/models/LoginUser.model';
import {ResponseModel} from '../../models/Response.model';

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
    alert(data.message);
    })
  }

}
