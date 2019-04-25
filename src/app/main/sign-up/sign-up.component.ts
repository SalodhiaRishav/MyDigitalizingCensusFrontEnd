import { Component, OnInit ,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

@ViewChild('signUpForm') SignUpForm:NgForm;
 
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.SignUpForm);
  }

  

}
