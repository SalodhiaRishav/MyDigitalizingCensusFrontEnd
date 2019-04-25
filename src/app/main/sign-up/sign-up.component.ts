import { Component, OnInit ,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

@ViewChild('signUpForm') SignUpForm:NgForm;
 
  pwdPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  firstnamelastnamepattern="^[a-zA-Z ]*$";
  aadharPattern="^[0-9].{11,11}$"
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.SignUpForm);
  }

  

}
